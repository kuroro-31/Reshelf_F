<template>
  <div>
    <span @click="delete_modal = !delete_modal">{{ $t('削除') }}</span>
    <ReModal v-if="delete_modal" @close="delete_modal = !delete_modal">
      <template slot="header">コースの削除</template>
      <div class="w-full flex flex-col justify-center">
        <div v-if="$store.state.user.auth" class="main-body-content py-0">
          <form @click="destroy(item.id)">
            <ReButton class="re-button">
              <button type="submit" class="re-button-primary bg-danger ml-auto">
                {{ $t('削除') }}
              </button>
            </ReButton>
          </form>
        </div>
      </div>
    </ReModal>
  </div>
</template>
<script>
import { destroy } from '@/mixins/posts/delete'
import ReModal from '@/components/atoms/ReModal'
import ReButton from '@/components/atoms/ReButton'
export default {
  components: {
    ReButton,
    ReModal,
  },
  mixins: [destroy],
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      delete_modal: false,
    }
  },
}
</script>
