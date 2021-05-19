<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$vs.theme({
      primary: '#33C4CC',
      dark: '#626262',
      success: '#28C76F',
      warning: '#F89A1E',
      danger: '#EA5555'
    })
  }
}
</script>
