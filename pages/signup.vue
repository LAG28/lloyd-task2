<template>
     <div class="grid grid-cols-2">
        <div>
        <NuxtLink to="/">
          <img src="assets/props/lebron.webp" alt="logo" class="-ml-1 w-5/6 mt-4 rounded-full" />
        </NuxtLink>
        </div>
        <div>
            <h2 class="p-9 block m-auto ml-32 text-5xl font-extrabold text-orange-300"> SIGN UP </h2>
            <div class="-ml-24 w-fit h-80 border bg-orange-100 rounded-xl">
                <form class="p-6 -ml-3">
                    <div class="flex gap-2 ml-1">
                        <label for="firstname"></label>
                        <input id="firstname" v-model="firstName" name="fname" type="text" placeholder="First Name" class="w-44 pl-2"/>
                        <label for="middlename"></label>
                        <input id="middlename" v-model="middleName" name="mname" type="text" placeholder="Middle Name" class="w-44 pl-2"/>
                        <label for="lastname"></label>
                        <input id="lastname" v-model="lastName" name="lname" type="text" placeholder="Last Name" class="w-44 pl-2"/>
                        <label for="suffix"></label>
                        <select id="suffix" v-model="suffix" name="suffix" type="text" class="w-20 pl-2">
                            <option value="" disabled selected>Suffix</option>
                            <option v-for="suffix in Suffixes" :value="suffix" :key="suffix">{{ suffix }}</option>
                        </select>
                    </div>
                    <div class="flex gap-2 ml-1 mt-6">
                        <label for="contactnum"></label>
                        <input id="contactnum" name="num" type="text" placeholder="Contact Number" v-model="contactNumber" @input="limitContactNumber" class="w-44 pl-2"/>
                        <label for="birthday"></label>
                        <input id="birthday" v-model="birthday" name="bday" type="date" placeholder="Date of Birth" class="w-44 pl-2"/>
                        <label for="birthday"></label>
                        <select id="gender" v-model="selectedGender" name="gender" type="text" class="w-44 pl-2">
                            <option value="" disabled selected> Gender </option>
                            <option v-for="gender in Gender" :value="gender" :key="gender">{{ gender }}</option>
                        </select>
                        <label for="age"></label>
                        <input id="age" v-model="age" name="age" type="number" placeholder="Age" class="w-20 pl-2" />
                    </div>
                    <div class="flex gap-2 ml-1 mt-6">
                        <label for="email-add"></label>
                        <input id="email-add" v-model="email" name="email" type="text" placeholder="Email Address" class="w-80 pl-2" />
                        <label for="pass"></label>
                        <input id="pass" v-model="password" name="password" type="password" placeholder="Password" class="w-80 pl-2" />
                    </div>
                    <div class="flex items-center ml-3 mt-8">
                        <input id="data-pri" name="data-pri" type="checkbox" class="h-4 w-4">
                        <label for="data-pri" class="ml-2 block text-sm text-gray-800">
                        Data Privacy Consent
                        </label>
                    </div>
                    <div>
                        <NuxtLink to="/login">
                            <button type="submit" class="w-96 block m-auto mt-14 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                            Sign up
                            </button>
                        </NuxtLink>
                    </div>
                </form>
            </div>  
            <audio controls autoplay loop class="w-100 h-7 block ml-28 mt-9">
                <source src="assets/props/Lebronn.mp3" type="audio/mp3">
            </audio>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        Suffixes: ['N/A','Jr.', 'Sr.', 'II', 'III', 'IV', 'V'],
        Gender: ['Male', 'Female'],
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        contactNumber: "",
        birthday: '',
        selectedGender: '',
        age: '',
        email: '',
        password: '',
        };
    },
    methods: {
        limitContactNumber() {
            this.contactNumber = this.contactNumber.substring(0, 11);
        }
  }
}
</script>