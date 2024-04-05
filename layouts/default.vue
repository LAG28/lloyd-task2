<template>
    <div>
      <div>
        <header class="shadow-md bg-blue-800 bg-opacity-80">
            <nav class="p-1 flex justify-between font-bold text-black">
                <NuxtLink to="/">
                    <img src="assets/props/lag.png" alt="logo" class="w-55 h-10 ml-5">
                </NuxtLink>
                <ul class="flex gap-8 mr-5 mt-2">
                    <li><NuxtLink to="/login"> Login </NuxtLink></li>
                    <li><NuxtLink to="/signup"> Sign up </NuxtLink></li> 
                </ul>
            </nav>
        </header>
    </div>
      <slot />
    </div>
  </template>

  