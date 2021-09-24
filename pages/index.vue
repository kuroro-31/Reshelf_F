<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex mx-auto container">
      <div class="lg:flex w-full">
        <div class="main-body min-h-(screen-16)">
          <!-- <hero-item /> -->
          <all-item :apitems="apitems" />
          <!-- <FooterNav /> -->
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<script>
import axios from 'axios'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import FooterNav from '@/components/layout/FooterNav'
// atoms
// import HeroItem from '@/components/atoms/item/HeroItem'
import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    FooterNav,
    // HeroItem,
    AllItem,
  },
  data() {
    return {
      apitems: [],
    }
  },
  mounted() {
    this.getApi()
  },
  methods: {
    async getApi() {
      axios.defaults.withCredentials = true
      // await axios.get('/sanctum/csrf-cookie').then(async () => {

      // })
      // this.$nuxt.$loading.start()

      return axios
        .get('/api/posts')
        .then((response) => {
          this.apitems = response.data.data
          // this.apiPopularTags = response.data.tags;
        })
        .catch((err) => {
          alert(err)
        })

      // this.$nuxt.$loading.finish()
    },
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
  @screen lg {
    border-right: 1px #ddd solid;
  }
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
.main-body {
  // @apply w-full lg:w-3/4 xl:w-3/5 pt-10 px-6 lg:px-12;
  // @apply w-full lg:w-3/4 xl:w-3/5 p-6;
  @apply w-full lg:w-3/4 xl:w-4/5 p-6 lg:pl-10;
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
</style>
