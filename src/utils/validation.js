export function registerValidation({ email, password, confirmPassword }) {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim(""))
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password)
    const isConfirmPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(confirmPassword);
  
    if (!isEmailValid) return "Invalid Email";
    else if (!isPasswordValid) return "Invalid Password";
    else if (!isConfirmPasswordValid) return "Invalid Confirm Password";
    else if (password !== confirmPassword) return "Passwords do not match";
    else return null;
  }
  