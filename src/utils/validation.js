export function registerValidation({
  fullName,
  email,
  password,
  confirmPassword,
}) {
  const isFullNameValid = /^[A-Za-z][A-Za-z\s.'-]{1,48}[A-Za-z]$/.test(
    fullName
  );
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password);
  const isConfirmPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(
      confirmPassword
    );

  if (!isFullNameValid) return "Invalid Name";
  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid) return "Invalid Password";
  if (!isConfirmPasswordValid) return "InvalidConfirmPassword";
  if (password !== confirmPassword) return "Passwords do not match";
  return null;
}


export function loginValidation({ email, password }) {
 
 

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password);

  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid) return "Invalid Password";
}


