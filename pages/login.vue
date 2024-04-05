<template>
    <div class="grid grid-cols-2">
      <div>
        <NuxtLink to="/">
          <img src="assets/props/lebron.webp" alt="logo" class="ml-20 w-5/6 mt-4 rounded-full" />
        </NuxtLink>
      </div>
      <div>
        <h2 class="p-9 text-right text-5xl font-extrabold text-orange-300">
            Login to your account
        </h2>
        <div class="ml-20 w-10/12 border bg-orange-100 rounded-xl">
          <form class="p-7">
            <div>
              <div class="shadow">
                <label for="email-add"></label>
                <input
                  id="email-add"
                  v-model="email"
                  name="email"
                  type="email"
                  class="w-full px-3 py-2 border placeholder-gray-500 text-gray-900"
                  placeholder="Email Address"
                />
              </div>
              <div class="shadow mt-4">
                <label for="pass"></label>
                <input
                  id="pass"
                  v-model="password"
                  name="password"
                  type="password"
                  class="w-full px-3 py-2 border placeholder-gray-500 text-gray-900"
                  placeholder="Password"
                />
              </div>
              <div class="flex justify-between mt-3">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4">
                  <label for="remember-me" class="ml-2 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a href="#" class="font-medium text-gray-800 hover:text-gray-400">
                    Forgot your password?
                  </a>
                </div>  
              </div>
            </div>
            <div>
                <button type="submit" class="w-full mt-14 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Login
                </button>
            </div>
          </form>
        </div>
        <div class="flex justify-between ml-20 mr-7 mt-2">
              <p> Don't have an account yet? </p>
              <NuxtLink to="/signup" class="text-cyan-800 font-bold">
                Sign up
              </NuxtLink>
        </div>
        <audio controls autoplay loop class="w-100 h-7 ml-52 mt-9">
            <source src="assets/props/Lebronn.mp3" type="audio/mp3">
        </audio>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  }
}
</script>