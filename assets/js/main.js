const generatePassword = (length, characters) => {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;
  while (true) {
    let password = '';
    for (let i = 0; i < length; i++) {
      let randomCharacter = characters[Math.floor(Math.random() * characters.length)];
      password += randomCharacter;
    };
    if (regex.test(password)) {
      return password;
    };
  };
};

const showGeneratePassword = (password) => displayPassword.value = password;

const activeBtnClean = () => btnClean.classList.remove('d-none');

const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);

const uppercaseCharacters = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x),);
const lowercaseCharacters = range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x),);
const symbolsCharacters = range('!'.charCodeAt(0), '/'.charCodeAt(0), 1).map((x) => String.fromCharCode(x),).concat(range(':'.charCodeAt(0), '@'.charCodeAt(0), 1).map((x) => String.fromCharCode(x),));
const numbersCharacters = range('0'.charCodeAt(0), '9'.charCodeAt(0), 1).map((x) => String.fromCharCode(x),);

const btnGenerate = document.getElementById('generate-password');
const btnClean = document.getElementById('clean-password');
const displayPassword = document.getElementById('password-display');

btnGenerate.addEventListener('click', (e) => {
  const passwordLength = Number(document.getElementById('password-length').value);
  const characters = uppercaseCharacters.concat(lowercaseCharacters, numbersCharacters, symbolsCharacters);
  let password = generatePassword(passwordLength, characters);
  showGeneratePassword(password);
  activeBtnClean();
});

btnClean.addEventListener('click', (e) => {
  displayPassword.value = '';
  btnClean.classList.add('d-none');
})