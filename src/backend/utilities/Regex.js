const nameRegex = /^[a-zA-Z\s]+$/;
const passwordRegex = /^(?=.*?[#?!@$%^&*-]).{7,}$/;
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

export { nameRegex, passwordRegex, emailRegex };
