document.getElementById("generate-btn").addEventListener("click", function () {
  const length = parseInt(document.getElementById("password-length").value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSpecial = document.getElementById("include-special").checked;

  const password = generatePassword(
    length,
    includeUppercase,
    includeNumbers,
    includeSpecial
  );
  document.getElementById("generated-password").value = password;
});

document.getElementById("copy-btn").addEventListener("click", function () {
  const passwordField = document.getElementById("generated-password");
  passwordField.select();
  document.execCommand("copy");
  alert("Slaptažodis nukopijuotas!");
});

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
