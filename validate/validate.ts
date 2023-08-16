import { mailRegex, passwordRegex } from "../constant/regex";

const fieldRequired = (fieldName: any, required = true)=>{
   return {
      required: required,
      message: `Please enter ${fieldName}!`
   }
}

const maxLength = (fieldName: any, maxLength: number) => {
   return {
     max: maxLength,
     message: `Please enter ${fieldName} less than ${maxLength} characters!`
   };
};

const minLength = (fieldName: any, minLength: number) => {
   return {
     max: minLength,
     message: `Please enter ${fieldName} less than ${maxLength} characters!`
   };
};

const rangeLength = (fieldName: any, minLength: number, maxLength: number) => {
   return {
     max: maxLength,
     min:minLength,
     message: `Please enter ${fieldName} in ${minLength} ~ ${maxLength} characters!`
   };
};

const phoneNumber = () => {
   return {
      pattern: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
      message: `Please enter phone number with correct format!`
   }
}

const mailValidate = () => {
   return {
      pattern: mailRegex,
      message: `Please enter email with correct format!`
   }
}

const passwordValidate = () => {
   return {
      pattern: passwordRegex,
      message: 'Please enter password at least 8 charecters and contain special charecter!'
   }
}


const validate = {
   fieldRequired,
   maxLength,
   minLength,
   rangeLength,
   phoneNumber,
   mailValidate,
   passwordValidate
}

export default validate