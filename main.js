// Select elements using querySelector
const [
  generateButton,
  copyButton,
  passwordLengthInput,
  includeUppercaseCheckbox,
  includeNumbersCheckbox,
  includeSpecialCheckbox,
  generatedPasswordField,
] = [
  "#generate-btn",
  "#copy-btn",
  "#password-length",
  "#include-uppercase",
  "#include-numbers",
  "#include-special",
  "#generated-password",
].map((selector) => document.querySelector(selector));

// Add event listener to generate button
generateButton.addEventListener("click", () => {
  const length = parseInt(passwordLengthInput.value);
  const charset = [
    "abcdefghijklmnopqrstuvwxyz",
    includeUppercaseCheckbox.checked && "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    includeNumbersCheckbox.checked && "0123456789",
    includeSpecialCheckbox.checked && "!@#$%^&*()_+[]{}|;:,.<>?",
  ]
    .filter(Boolean)
    .join("");

  generatedPasswordField.value = [...Array(length)]
    .map(() => charset[Math.floor(Math.random() * charset.length)])
    .join("");
});

// Add event listener to copy button
copyButton.addEventListener("click", () => {
  generatedPasswordField.select();
  document.execCommand("copy");
  alert("Slaptažodis nukopijuotas!");
});
