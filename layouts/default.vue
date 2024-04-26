<script setup lang="ts">
  const drawer = ref(false)
</script>

<template>
  <div>
    <v-card>
      <v-layout>
        <v-app-bar color="blue-darken-4 ">
          <NuxtLink to="/" @click="console.log('name: Home, link: /')">
            <img src="assets/props/lag.png" alt="logo" class="w-55 h-10 ml-5">
          </NuxtLink>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'right' : 'right'" temporary
          image="assets/props/lupy1.gif">
          <v-list>
            <NuxtLink to="/" @click="console.log('name: Home, link: /')">
              <v-list-item prepend-icon="mdi-view-dashboard" title="Home"></v-list-item>
            </NuxtLink>
            <NuxtLink to="/login" @click="console.log('name: Login, link: /login')">
              <v-list-item prepend-icon="mdi-account-circle" title="Login"></v-list-item>
            </NuxtLink>
            <NuxtLink to="/signup" @click="console.log('name: Signup, link: /signup')">
              <v-list-item prepend-icon="mdi-email" title="Sign up"></v-list-item>
            </NuxtLink>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <slot />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>
