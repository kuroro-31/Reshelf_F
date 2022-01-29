import Vue from 'vue'
import { mapGetters } from 'vuex'

const Cart = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          carts: 'shop/cart/cart',
        }),
      },
    })
  },
}

Vue.use(Cart)
