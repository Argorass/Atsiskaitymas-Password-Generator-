// Select elements using querySelector
const generateButton = document.querySelector("#generate-btn");
const copyButton = document.querySelector("#copy-btn");
const passwordLengthInput = document.querySelector("#password-length");
const includeUppercaseCheckbox = document.querySelector("#include-uppercase");
const includeNumbersCheckbox = document.querySelector("#include-numbers");
const includeSpecialCheckbox = document.querySelector("#include-special");
const generatedPasswordField = document.querySelector("#generated-password");

// Add event listener to generate button
generateButton.addEventListener("click", function () {
  const length = parseInt(passwordLengthInput.value);
  const includeUppercase = includeUppercaseCheckbox.checked;
  const includeNumbers = includeNumbersCheckbox.checked;
  const includeSpecial = includeSpecialCheckbox.checked;

  const password = generatePassword(
    length,
    includeUppercase,
    includeNumbers,
    includeSpecial
  );
  generatedPasswordField.value = password;
});

// Add event listener to copy button
copyButton.addEventListener("click", function () {
  generatedPasswordField.select();
  document.execCommand("copy");
  alert("Slaptažodis nukopijuotas!");
});

// Password generation function
function generatePassword(
  length,
  includeUppercase,
  includeNumbers,
  includeSpecial
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let charset = lowercase;
  if (includeUppercase) charset += uppercase;
  if (includeNumbers) charset += numbers;
  if (includeSpecial) charset += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
