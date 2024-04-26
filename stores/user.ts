import { defineStore } from "pinia";

/* export const useMyStore = defineStore('user', () => {
  // Reactive state
  const login = ref<string[][]>([]); // Define names as a reactive reference

  // Action to add a name
  function loginSuccessfully(email: string, password: string): void {
    // Add the new names to the array
    login.value.push([ email, password ]);
  }

  return {
    login,
    loginSuccessfully
  };
}); */

interface LoginInfo {
  email: string;
  password: string;
}

interface SignupInfo {
  firstname: string;
  middlename: string;
  lastname: string;
  suffix: string;
  gender: string;
  number: string;
  birthdate: string;
  age: string;
  email: string;
  password: string;
}

export const useMyStore = defineStore("user", () => {
  // Reactive state
  const login = ref<LoginInfo[]>([]);
  const signup = ref<SignupInfo[]>([]);

  // Action to add login information
  function loginSuccessfully(email: string, password: string) {
    // Add the new login information to the array
    login.value.push({ email, password });
  }

  function signUpSuccessfully(
    firstname: string,
    middlename: string,
    lastname: string,
    suffix: string,
    number: string,
    birthdate: string,  
    age: string,
    gender: string,
    email: string,
    password: string) {
      signup.value.push({ 
        birthdate,
        age, 
        middlename,
        lastname,
        suffix,
        number,
        firstname,
        gender,
        email, 
        password})
    }

  return {
    login,
    signup,
    loginSuccessfully,
    signUpSuccessfully
  };
});



