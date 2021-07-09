<template>
  <div>
    <div v-if="$auth.loggedIn">
      {{ $auth.user.name }}
    </div>
    <Nuxt />
  </div>
</template>
