<template>
  <div class="w-full flex mx-auto">
    <div class="p-8 w-full">
      <div class="items">
        <div
          v-for="item in items"
          :key="item.id"
          class=""
          @click.prevent="show"
        >
          <img :src="item.src" :alt="item.alt" class="img" />
        </div>
      </div>
      <transition name="lightbox">
        <div v-if="visible" class="lightbox" @click="hide">
          <div v-for="item in items" :key="item.id" class="content">
            <img :src="item.src" :alt="item.alt" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
  },
}
</script>
<style lang="scss" scoped>
.items {
  @apply flex flex-wrap w-full justify-center;
}
.img {
  @apply object-cover rounded-lg shadow m-8;
  width: 200px;
  height: 200px;
  transition: 0.2s all ease;
  &:hover {
    @apply cursor-pointer;
    box-shadow: 0 1px 15px 1px var(--primary) !important;
    transform: translateY(-5px);
  }
}

.content {
  @apply absolute flex flex-col items-center justify-center;
  background: white;
  min-height: 60vh;
  max-height: calc(100% - 120px);
  margin-left: auto;
  margin-right: auto;
  max-width: calc(100% - 120px);
  width: 1040px;
  z-index: 510;
}
.lightbox {
  @apply fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center;
  background: rgba(9, 30, 66, 0.54);
  width: 100vw;
  height: 100vh;
  z-index: 99000;
  opacity: 1;
  transition: opacity 220ms ease 0s;
}
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.3s ease;
}
.lightbox-enter,
.lightbox-leave-to {
  opacity: 0;
  transform: translateY(10px);
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
}
</style>
