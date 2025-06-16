const nameRegex = /^[a-zA-Z\s]+$/;
const passwordRegex = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export { nameRegex, passwordRegex, emailRegex };
