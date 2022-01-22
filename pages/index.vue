<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />

    <template v-if="!$store.state.authenticate.authenticated">
      <HeroItem />
    </template>

    <main class="w-full flex max-w-screen-xl mx-auto container">
      <div class="lg:flex w-full -mx-6">
        <nav class="side-nav lg:max-h-(screen-22) pin-22">
          <SidebarSearch />
        </nav>
        <div class="main-body min-h-(screen-16)">
          <!-- <hero-item /> -->
          <template v-if="loading">読み込み中です</template>
          <all-item v-else :items="items" />

          <!-- <FooterNav /> -->
        </div>
      </div>
    </main>

    <FooterNav />
  </div>
</template>
<script>
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import FooterNav from '@/components/layout/FooterNav'
import SidebarSearch from '@/components/layout/sidebar/SidebarSearch'
// atoms
import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    FooterNav,
    SidebarSearch,
    AllItem,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(`/api/posts`)
    return { items: data }
  },
  data() {
    return {
      loading: false,
      items: [],
    }
  },
}
</script>
<style lang="scss" scoped>
.title {
  @apply mb-2;
  color: var(--color);
  font-size: 60px;
  line-height: 74px;
  text-align: left;
}
.describe {
  @apply inline-block text-xl font-semibold mb-8;
  color: var(--sub-color);
  height: 67px;
  line-height: 24px;
  text-align: left;
}
.btn {
  @apply flex items-center justify-center font-bold duration-200 rounded-lg;
  width: 160px;
  height: 45px;
  color: var(--bg-secondary);
  background: rgba(var(--primary));
  &:hover {
    @apply shadow-lg;
  }
}
.box {
  @apply block flex flex-col items-center justify-center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  // border: 1px solidrgba(var(--primary));

  &:hover {
    @apply cursor-pointer;
  }
  &-business {
    @apply duration-200 mr-16;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-tech {
    @apply duration-200 mr-16;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-aca {
    @apply duration-200 mr-16;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-lifestyle {
    @apply duration-200;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-title {
    @apply text-left inline-block text-lg font-semibold;
    line-height: 20px;
    color: var(--color);
    margin-top: 20px;
  }
}
.field {
  @apply w-full;
  height: 150px;
  color: var(--bg-secondary);
  h3 {
    @apply text-4xl font-bold w-full h-full flex items-center justify-center;
    color: var(--bg-secondary);
  }
}

.side-nav {
  @apply hidden w-full lg:block lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
  // @screen lg {
  //   border-right: 1px #ddd solid;
  // }
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
.main-body {
  // @apply w-full lg:w-3/4 xl:w-3/5 pt-10 px-6 lg:px-12;
  // @apply w-full lg:w-3/4 xl:w-3/5 p-6;
  @apply w-full lg:w-3/4 xl:w-4/5 pt-10 px-6 lg:px-12;
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
</style>
