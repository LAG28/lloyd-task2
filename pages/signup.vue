<script setup lang="ts">
import { useMyStore } from '@/stores/user';

const store = useMyStore();

const form = ref({
    firstname: '',
    middlename: '',
    lastname: '',
    suffix: '',
    gender: '',
    number: '',
    birthdate: '',
    age: '',
    email: '',
    password: '',
    check: false
});

const loading = ref(false);

const emailRules = [
    (value: string) => {
        if (/.+@.+\..+/.test(value)) return true;
        return 'E-mail must be valid.';
    },
];

const SubmitDisabled = computed(
    () => !form.value.email ||
        !form.value.password ||
        !form.value.firstname ||
        !form.value.middlename ||
        !form.value.lastname ||
        !form.value.suffix ||
        !form.value.number ||
        !form.value.birthdate ||
        !form.value.age ||
        !form.value.gender ||
        !form.value.check);

const submit = () => {

    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        // Call the action in the store to add a name
        store.signUpSuccessfully(
            form.value.firstname,
            form.value.middlename,
            form.value.lastname,
            form.value.suffix,
            form.value.number,
            form.value.birthdate,
            form.value.age,
            form.value.gender,
            form.value.email,
            form.value.password,
        )
        form.value.email = '';
        form.value.password = '';
        form.value.firstname = '';
        form.value.middlename = '';
        form.value.lastname = '';
        form.value.suffix = '';
        form.value.gender = '';
        form.value.number = '';
        form.value.birthdate = '';
        form.value.age = '';
    }, 2000);
};
</script>

<template>
    <div class="flex bg-blue-200 mx-auto">
        <v-container>
            <h2 class="p-4 -mt-6 mb-4 text-center text-5xl font-extrabold text-blue-700">
                Sign Up
            </h2>
            <v-row>
                <v-sheet color="blue-darken-4" width="1200" class="mx-auto mb-5 pa-7" rounded>
                    <v-card>
                        <v-form>
                            <v-container>
                                <v-row>
                                    <v-col cols="6" md="3">
                                        <v-text-field v-model="form.firstname" variant="outlined" label="First name"
                                            placeholder="Enter your First name"></v-text-field>
                                    </v-col>

                                    <v-col cols="6" md="3">
                                        <v-text-field v-model="form.middlename" variant="outlined" label="Middle name"
                                            placeholder="Enter your Middle name"></v-text-field>
                                    </v-col>

                                    <v-col cols="6" md="3">
                                        <v-text-field v-model="form.lastname" variant="outlined" label="Last name"
                                            placeholder="Enter your Last name"></v-text-field>
                                    </v-col>

                                    <v-col cols="6" md="3">
                                        <v-select label="Suffix" v-model="form.suffix" variant="outlined"
                                            :items="['N/A', 'Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V', 'VI']"></v-select>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6" md="3" class="-mt-4">
                                        <v-text-field v-model="form.number" maxlength="11" variant="outlined"
                                            label="Contact Number"
                                            placeholder="Enter your Contact Number"></v-text-field>
                                    </v-col>

                                    <v-col cols="6" md="3" class="-mt-4">
                                        <v-text-field v-model="form.birthdate" type="date" variant="outlined"
                                            label="Date of Birth" placeholder="Enter your Date of Birth"></v-text-field>
                                    </v-col>

                                    <v-col cols="6" md="3" class="-mt-4">
                                        <v-select label="Gender" v-model="form.gender" variant="outlined"
                                            :items="['Male', 'Female']"></v-select>
                                    </v-col>

                                    <v-col cols="6" md="3" class="-mt-4">
                                        <v-text-field v-model="form.age" label="Age" variant="outlined" maxlength="2"
                                            placeholder="Enter your Age"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6" md="6" class="-mt-4">
                                        <v-text-field v-model="form.email" :rules="emailRules" type="email"
                                            label="Email" placeholder="Enter your Email"
                                            variant="outlined"></v-text-field>
                                    </v-col>

                                    <v-col cols="6" md="6" class="-mt-4">
                                        <v-text-field v-model="form.password" type="password" label="Password"
                                            placeholder="Enter your Password" variant="outlined"></v-text-field>
                                    </v-col>
                                </v-row>

                                <div>
                                    <v-checkbox v-model="form.check" label="Accept Terms and Conditions"
                                        class="text-black" color="primary"></v-checkbox>
                                </div>

                                <div class="flex justify-center -mt-5">
                                    <v-btn @click="submit" :disabled="SubmitDisabled" :loading="loading"
                                        color="success" width="400">Submit</v-btn>
                                </div>
                            </v-container>
                        </v-form>
                    </v-card>
                </v-sheet>
            </v-row>
        </v-container>
    </div>
</template>


<!-- <script setup lang="ts">

const form = ref({
    Suffixes: ['N/A','Jr.', 'Sr.', 'II', 'III', 'IV', 'V'],
    Gender: ['Male', 'Female'],
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    contactNumber: '',
    birthday: '',
    selectedGender: '',
    age: '',
    email: '',
    password: '',
})

const trackedForm = computed(() => form.value);
console.log("damn",trackedForm)
</script>

<template>
     <div class="grid grid-cols-2">
        <div>
            <NuxtLink to="/" @click="console.log('name: Home, link: /')">
                <img src="assets/props/lebron.webp" alt="logo" class="-ml-1 w-5/6 mt-4 rounded-full" />
            </NuxtLink>
        </div>
        <div>
            <h2 class="p-9 block m-auto ml-32 text-5xl bg- font-extrabold text-orange-300"> SIGN UP </h2>
            {{ trackedForm }}
            <div class="-ml-24 w-fit h-80 border bg-orange-100 rounded-xl">
                <form class="p-6 -ml-3">
                    <div class="flex gap-2 ml-1 mt-3">
                        <label for="firstname"></label>
                        <input id="firstname" v-model="form.firstName" name="fname" type="text" placeholder="First Name" class="w-44 pl-2"/>
                        <label for="middlename"></label>
                        <input id="middlename" v-model="form.middleName" name="mname" type="text" placeholder="Middle Name" class="w-44 pl-2"/>
                        <label for="lastname"></label>
                        <input id="lastname" v-model="form.lastName" name="lname" type="text" placeholder="Last Name" class="w-44 pl-2"/>
                        <label for="suffix"></label>
                        <select id="suffix" v-model="form.suffix" name="suffix" class="w-20 pl-2">
                            <option value="" disabled selected>Suffix</option>
                            <option v-for="suffix in form.Suffixes" :value="suffix" :key="suffix">{{ suffix }}</option>
                        </select>
                    </div>
                    <div class="flex gap-2 ml-1 mt-6">
                        <label for="contactnum"></label>
                        <input id="contactnum" name="num" type="text" placeholder="Contact Number" v-model="form.contactNumber" pattern="[0-9]{11}"  title="11 digits code" required class="w-44 pl-2"/>
                        <label for="birthday"></label>
                        <input id="birthday" v-model="form.birthday" name="bday" type="date" placeholder="Date of Birth" class="w-44 pl-2"/>
                        <label for="birthday"></label>
                        <select id="gender" v-model="form.selectedGender" name="gender" class="w-44 pl-2">
                            <option value="" disabled selected> Gender </option>
                            <option v-for="gender in form.Gender" :value="gender" :key="gender">{{ gender }}</option>
                        </select>
                        <label for="age"></label>
                        <input id="age" v-model="form.age" name="age" type="number" placeholder="Age" class="w-20 pl-2" />
                    </div>
                    <div class="flex gap-2 ml-1 mt-6">
                        <label for="email-add"></label>
                        <input id="email-add" v-model="form.email" name="email" type="text" placeholder="Email Address" class="w-80 pl-2" />
                        <label for="pass"></label>
                        <input id="pass" v-model="form.password" name="password" type="password" placeholder="Password" class="w-80 pl-2" />
                    </div>
                    <div class="flex items-center ml-3 mt-8">
                        <input id="data-pri" name="data-pri" type="checkbox" class="h-4 w-4">
                        <label for="data-pri" class="ml-2 block text-sm text-gray-800">
                        Data Privacy Consent
                        </label>
                    </div>
                    <div>
                            <button type="submit" class="w-96 block m-auto mt-8 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                <NuxtLink to="/signup" @click="console.log('name: Signup, link: /signup')">Sign up</NuxtLink>
                            </button>
                    </div>
                </form>
            </div>  
            <audio controls autoplay loop class="w-100 h-7 block ml-28 mt-9">
                <source src="assets/props/Lebronn.mp3" type="audio/mp3">
            </audio> 
        </div>
    </div>
</template>
 -->