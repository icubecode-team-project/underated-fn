export function registerValidation({ email, password, confirmPassword }) {
 
 

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password);
  const isConfirmPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(confirmPassword);

  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid) return "Invalid Password";
  if (!isConfirmPasswordValid) return "InvalidConfirmPassword";
  if (password !== confirmPassword) return "Passwords do not match";
  return null;
}
