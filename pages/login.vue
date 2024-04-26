<script setup lang="ts">
import { useMyStore } from '@/stores/user';

const store = useMyStore();

// Reactive references for input values
const email = ref('');
const password = ref('');
const loading = ref(false);

const SubmitDisabled = computed(() => !email.value || !password.value);
// Function to handle form submission
const handleSubmit = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    // Call the action in the store to add a name
    store.loginSuccessfully(email.value, password.value);
    // Clear the input fields after submitting
    password.value = '';
    email.value = '';
  }, 2000);
};

const emailRules = [
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'E-mail must be valid.';
  },
];
</script>

<template>
  <div class="bg-blue-200">
    <v-container>
      <h2 class="p-4 -mt-3 mb-6 text-center text-5xl font-extrabold text-blue-700">
        Login to your account
      </h2>
      <v-row>
        <v-sheet color="blue-darken-4" width="700" class="mx-auto mb-7 pa-10 " rounded>
          <v-card class="px-6 py-8" height="320">
            <v-form>
              <v-text-field v-model="email" :rules="emailRules" label="Email" variant="outlined"
                placeholder="Enter your Email" clearable prepend-inner-icon="mdi-email-outline"></v-text-field>
              <v-text-field v-model="password" type="password" label="Password" placeholder="Enter your Password"
                class="mt-5" clearable prepend-inner-icon="mdi-lock-outline" variant="outlined"></v-text-field>
              <div class="flex justify-between">
                <v-checkbox color="primary" class="-mt-5" label="Remember me" hide-details></v-checkbox>
                <a href="#" class="text-blue-800 hover:text-blue-300">Forgot Password?</a>
              </div>
              <v-btn @click="handleSubmit" :loading="loading" :disabled="SubmitDisabled" color="success" size="large"
                variant="elevated" block>
                Log In
              </v-btn>

            </v-form>
          </v-card>
        </v-sheet>
      </v-row>
    </v-container>
  </div>
</template>
