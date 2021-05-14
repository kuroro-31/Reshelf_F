<template>
  <div class="w-full h-full mx-auto flex flex-col">
    <HeaderNav />
    <main class="w-full flex mx-auto">
      <all-item :items="items" />
    </main>
  </div>
</template>
<script>
import HeaderNav from '@/components/layout/HeaderNav'
import AllItem from '@/components/atoms/item/AllItem'
export default {
  components: {
    HeaderNav,
    AllItem,
  },
  data() {
    return {
      items: [
        {
          // キー
          id: '1',
          // 画像
          src: 'https://i.gyazo.com/92f8c7d85e6e0e159996a15fb00a9ef4.png',
          alt: 'components item',
          // タイトル
          title: 'Foo',
          // 作者
          name: 'クラピカ',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
          // URL
          mock_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          front_urls: [
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
          ],
          dev_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          real_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          // ファイル名
          mock_passs: [
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
          ],
          front_passs: [
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
          ],
        },
        {
          // キー
          id: '2',
          // 画像
          src: 'https://i.gyazo.com/4b894883753296442386f8e24952f104.jpg',
          alt: 'components item',
          // タイトル
          title: 'Foo',
          // 作者
          name: 'クロロ・ルシルフル',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
          // URL
          mock_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          front_urls: [
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
          ],
          dev_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          real_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          // ファイル名
          mock_passs: [
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
          ],
          front_passs: [
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
          ],
        },
        {
          // キー
          id: '3',
          // 画像
          src: 'https://i.gyazo.com/682701b49b267640ea8300a3e3d7bba9.png',
          alt: 'components item',
          // タイトル
          title: 'Foo',
          // 作者
          name: 'フェイタン',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
          // URL
          mock_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          front_urls: [
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
          ],
          dev_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          real_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          // ファイル名
          mock_passs: [
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
          ],
          front_passs: [
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
          ],
        },
        {
          // キー
          id: '4',
          // 画像
          src: 'https://i.gyazo.com/27bad6b0196fe465f8e74eb1067709ed.png',
          alt: 'components item',
          // タイトル
          title: 'Foo',
          // 作者
          name: 'ヒソカ',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
          // URL
          mock_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          front_urls: [
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
          ],
          dev_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          real_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          // ファイル名
          mock_passs: [
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
          ],
          front_passs: [
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
          ],
        },
        {
          // キー
          id: '5',
          // 画像
          src: 'https://i.gyazo.com/eba895df6ab107f310e53b4f68d18bfd.png',
          alt: 'components item',
          // タイトル
          title: 'Foo',
          // 作者
          name: 'マチ',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
          // URL
          mock_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          front_urls: [
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
            'http://localhost:8080/jp',
          ],
          dev_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          real_urls: [
            'http://localhost:8888',
            'http://localhost:8888',
            'http://localhost:8888',
          ],
          // ファイル名
          mock_passs: [
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
            'mock/components/atoms/item/AllItem.vue',
          ],
          front_passs: [
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
            'front/components/atoms/item/AllItem.vue',
          ],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
main {
  height: calc(100vh - 61px);
  overflow-y: hidden;
}
</style>
