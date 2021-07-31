<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div>
      <Nuxt />
    </div>
    <FooterNav />
  </div>
</template>
<script>
import HeaderNav from '@/components/layout/header/HeaderNav'

export default {
  components: {
    HeaderNav,
  },
  data() {
    return {}
  },
}
</script>
