<template>
  <div class="hero">
    <div class="flex lg:w-1/2 justify-center h-full items-center">
      <div class="flex flex-col">
        <h2 class="title">
          プログラミングで
          <br />
          可能性を広げる
        </h2>
        <span class="describe">
          Reshelfは、プログラミング学習教材のマーケットプレイスです。
          受講者による教材評価から教材を循環し、専門知識のある講師と受講者をつなぐプラットホームを体験できます。
        </span>
        <nuxt-link to="/auth/login">
          <re-button class="re-button">
            <button type="submit" class="re-button-primary-filled bg-primary">
              新規登録・ログイン
            </button>
          </re-button>
        </nuxt-link>
      </div>
    </div>
    <HeroImg />
  </div>
</template>
<script>
import ReButton from '@/components/atoms/ReButton'
export default {
  components: {
    ReButton,
  },
}
</script>
<style lang="scss" scoped>
.hero {
  @apply w-full flex items-center mx-auto;
  background: var(--bg-secondary);
  max-height: calc(100vh - 65px);
  padding: 6.7% 0 6.7% 6.7%;
}
.title {
  @apply mb-2 font-bold;
  color: var(--color);
  // color: var(--sub-color);
  font-size: 60px;
  line-height: 74px;
  text-align: left;
}
.describe {
  @apply inline-block text-xl mb-8;
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
</style>
