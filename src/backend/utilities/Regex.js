import isEmail from "validator/lib/isEmail.js";
const nameRegex = /^[a-zA-Z\s]+$/;
const passwordRegex = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;
const emailRegex = isEmail;

export { nameRegex, passwordRegex, emailRegex };
