<template>
  <header
    class="nav"
    :class="{ active: $store.state.authenticate.authenticated }"
  >
    <div class="nav-content">
      <div class="nav-left py-2.5">
        <Logo />
      </div>

      <div class="nav-center flex items-center py-2.5">
        <!-- 検索 -->
      </div>

      <div class="nav-right">
        <input type="text" class="search" placeholder="Search..." />

        <template v-if="$store.state.authenticate.authenticated">
          <form @submit.prevent="create">
            <ReButton class="ReButton re-button-small no-shadow">
              <button class="re-button-primary-border bg-secondary">
                コースの作成
              </button>
            </ReButton>
          </form>
        </template>

        <!-- お気に入り -->
        <Like />

        <!-- カート -->
        <Cart />

        <!-- ユーザードロップダウン -->
        <UserDropdown />
      </div>
    </div>

    <transition name="reshelf-toast">
      <Toast>
        <div v-if="create_error" class="reshelf-toast reshelf-toast-danger">
          セッションが切れました。再度ログインしてください。
        </div>
        <div v-if="create_success" class="reshelf-toast reshelf-toast-success">
          ああああああああ
        </div>
      </Toast>
    </transition>
  </header>
</template>

<script>
import { create } from '@/mixins/posts/create'
import { toast } from '@/mixins/toast/toast'

//
import Cart from '@/components/layout/header/components/Cart'
import Logo from '@/components/layout/header/components/Logo'
import Like from '@/components/layout/header/components/Like'
import UserDropdown from '@/components/layout/header/components/UserDropdown'
import ReButton from '@/components/atoms/ReButton'

export default {
  components: {
    Cart,
    Logo,
    Like,
    UserDropdown,
    ReButton,
  },
  mixins: [create, toast],
}
</script>
<style lang="scss" scoped>
.toggle {
  @apply mr-4 cursor-pointer p-2 flex-shrink-0;
  height: 40px;
  width: 40px;
  &:hover {
    @apply rounded-lg;
    background: var(--eee);
  }
}
.nav {
  @apply sticky top-0 z-20 flex items-center justify-center h-16;
  background-color: var(--bg-secondary);
  padding: 0 6.7%;
  // background-color:rgba(var(--primary));
  // border-bottom-width: 1px;
  // border-style: solid;
  // border-color: var(--gray);
  &-content {
    @apply w-full mx-auto flex flex-wrap items-center justify-between mt-0;
  }
  &-left {
    @apply flex items-center lg:w-1/4 xl:w-1/5 mr-12;
    height: 45px;
    width: 240px;
  }
  &-center {
    @apply mr-auto;
  }
  &-right {
    @apply justify-end;
  }
  &-left,
  &-right {
    @apply flex h-full items-center;
  }
}
.dropdown {
  @apply px-3 relative;
  height: 60px;
  &-icon {
    // @apply flex-shrink-0 inline-block cursor-pointer;
  }
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded-lg shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg-secondary);
    @screen lg {
      margin-top: 60px;
      width: 300px;
      max-height: calc(100vh - 120px);
    }
  }
}
// .fb-btn {
//   @apply py-2 px-4 text-white rounded-lg text-lg  duration-200;
//   background: #1976f2;
//   border: 1px solid #1976f2;

//   &:hover {
//     -webkit-box-shadow: 0 8px 25px -8px #1976f2;
//     box-shadow: 0 8px 25px -8px #1976f2;
//   }
// }
// .fb-btn-posted {
//   @apply py-3 px-4 text-white rounded-lg text-xl font-bold;
//   color: #1976f2;
//   border: 1px solid #1976f2;
// }
// .show {
//   @apply block;
// }
// .dropdown-bg {
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 2;
// }
.search {
  @apply px-4 py-2 rounded-lg;
  background-color: var(--bg-secondary);
  background-clip: padding-box;
  border: 1px solid var(--gray);
}

// .purple {
//   width: 30px;
//   height: 30px;
//   background: $purple;
// }
</style>
