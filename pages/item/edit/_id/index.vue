<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex mx-auto scroll-none">
      <div class="lg:flex w-full mt-4">
        <div class="flex">
          <nav
            class="card side-nav lg:max-h-(screen-22) pin-22 scroll-none mb-auto"
          >
            <div class="item">
              <span class="item-title">受講生</span>
              <nuxt-link class="item-link" to="/user/learning">
                受講中のコース
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/like">
                お気に入り
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/bought">
                購入履歴
              </nuxt-link>

              <span class="item-title">受講生</span>
              <nuxt-link class="item-link" to="/user/learning">
                受講中のコース
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/like">
                お気に入り
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/bought">
                購入履歴
              </nuxt-link>
            </div>
          </nav>
          <div class="">
            <div @click.self="onEditNoteEnd()">
              <!-- ノートリスト -->
              <draggable :list="noteList" group="notes" :animation="200">
                <NoteItem
                  v-for="note in noteList"
                  :key="note.id"
                  :note="note"
                  :layer="1"
                  @delete="onDeleteNote"
                  @select="onSelectNote"
                  @editStart="onEditNoteStart"
                  @editEnd="onEditNoteEnd"
                  @addChild="onAddChildNote"
                  @addNoteAfter="onAddNoteAfter"
                />
              </draggable>

              <!-- ノート追加ボタン -->
              <button @click="onClickButtonAdd">追加</button>
            </div>
          </div>
        </div>
        <div class="main-body scroll-none">
          <div class="main-body-content">
            <p class="mb-4">{{ alert }}</p>
            <!-- <all-item :items="items" /> -->
            <form @submit.prevent="update">
              <!-- タイトル -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                タイトル
              </label>
              <input
                v-model.trim="post.title"
                type="text"
                autofocus
                class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
              />

              <!-- タグ -->
              <!-- <label class="font-semibold text-xs text-gray-600 pb-1 block">
                タグ
              </label>
              <article-tags-input
                :autocomplete-items="allTagNames"
                :all-tags="filteredItems"
                @catchTags="post.tags"
              ></article-tags-input> -->

              <!-- body -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                本文
              </label>
              <editor
                v-model.trim="post.body"
                selector="textarea"
                api-key="oxl1g4dleeqrpfmcnpvu7wqcnpsljq6nxbpenlhole2n0rmh"
                :init="init"
              />
            </form>

            <div class="">
              <template v-if="selectedNote == null">
                <div class="no-selected-note">ノートを選択してください</div>
              </template>
              <template v-else>
                <div class="path">
                  <small>{{ selectedPath }}</small>
                </div>
                <div class="note-content">
                  <h3 class="note-title">{{ selectedNote.name }}</h3>
                  <draggable :list="selectedNote.widgetList" group="widgets">
                    <WidgetItem
                      v-for="widget in selectedNote.widgetList"
                      :key="widget.id"
                      :widget="widget"
                      :layer="1"
                      @delete="onDeleteWidget"
                      @addChild="onAddChildWidget"
                      @addWidgetAfter="onAddWidgetAfter"
                    />
                  </draggable>
                  <!-- <button class="transparent" @click="onClickButtonAddWidget">
                    <i class="fas fa-plus-square"></i>
                    ウィジェットを追加
                  </button> -->
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'
import { update } from '@/mixins/posts/update.js'
import draggable from 'vuedraggable'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// atoms
// import ArticleTagsInput from '@/components/atoms/ArticleTagsInput'
import NoteItem from '@/components/atoms/item/new/NoteItem'

export default {
  components: {
    HeaderNav,
    editor: Editor,
    // ArticleTagsInput,

    NoteItem,
    draggable,
  },
  mixins: [update],
  data() {
    return {
      errors: {},
      alert: '',
      content: [],
      allTagNames: [
        'プログラミング',
        'python',
        'javascript',
        'golong',
        'gaagaa',
      ],
      lang: 'ja', // 現在の言語
      init: {
        // 基本設定
        language: '',
        height: 500,
        menubar: false,
        spellcheck: true,
        body_class: 'reshelf-editor',
        selector: 'textarea',
        // toc
        toc_header: 'div',
        toc_class: 'reshelf-toc',
        toc_depth: 6,
        // plugins
        plugins: [
          'print preview paste importcss blockquote searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc tocupdate insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        ],
        // toolbar
        toolbar:
          'formatselect | underline strikethrough forecolor backcolor | alignleft aligncenter alignright | bullist numlist | link | toc tocupdate | charmap emoticons | help',
        // insert_toolbar
        // insert_toolbar: 'quickimage quicktable emoticons',
        // quick_toolbar
        quickbars_insert_toolbar: 'quickimage quicktable codesample',
        // color_map
        color_map: [
          '#BFEDD2',
          'Light Green',
          '#FBEEB8',
          'Light Yellow',
          '#F8CAC6',
          'Light Red',
          '#ECCAFA',
          'Light Purple',
          '#C2E0F4',
          'Light Blue',

          '#2DC26B',
          'Green',
          '#F1C40F',
          'Yellow',
          '#E03E2D',
          'Red',
          '#B96AD9',
          'Purple',
          '#3598DB',
          'Blue',

          '#169179',
          'Dark Turquoise',
          '#E67E23',
          'Orange',
          '#BA372A',
          'Dark Red',
          '#843FA1',
          'Dark Purple',
          '#236FA1',
          'Dark Blue',

          '#ECF0F1',
          'Light Gray',
          '#CED4D9',
          'Medium Gray',
          '#95A5A6',
          'Gray',
          '#7E8C8D',
          'Dark Gray',
          '#34495E',
          'Navy Blue',

          '#000000',
          'Black',
          '#ffffff',
          'White',
        ],
        // markdown
        textpattern_patterns: [
          { start: '*', end: '*', format: 'italic' },
          { start: '**', end: '**', format: 'bold' },
          { start: '#', format: 'h1' },
          { start: '##', format: 'h2' },
          { start: '###', format: 'h3' },
          { start: '####', format: 'h4' },
          { start: '#####', format: 'h5' },
          { start: '######', format: 'h6' },
          // { start: '> ', format: 'blockquote' },
          { start: '1. ', cmd: 'InsertOrderedList' },
          { start: '* ', cmd: 'InsertUnorderedList' },
          { start: '- ', cmd: 'InsertUnorderedList' },
          // { start: '//brb', replacement: 'Be Right Back' },
        ],
        // codesample
        codesample_languages: [
          { text: 'HTML/XML', value: 'markup' },
          { text: 'JavaScript', value: 'javascript' },
          { text: 'CSS', value: 'css' },
          { text: 'PHP', value: 'php' },
          { text: 'Ruby', value: 'ruby' },
          { text: 'Python', value: 'python' },
          { text: 'Java', value: 'java' },
          { text: 'C', value: 'c' },
          { text: 'C#', value: 'csharp' },
          { text: 'C++', value: 'cpp' },
        ],
        // link
        default_link_target: '_blank',
        link_assume_external_targets: true,
        link_quicklink: true,
        // image upload
        images_upload_credentials: true,
        images_reuse_filename: true,
        // list
        advlist_bullet_styles: 'disc',
        advlist_number_styles: 'lower-alpha',
      },

      noteList: [],
      selectedNote: null,
    }
  },
  computed: {
    selectedPath() {
      const searchSelectedPath = function (noteList, path) {
        for (let note of noteList) {
          const currentPath =
            path == null ? note.name : `${path} / ${note.name}`
          if (note.selected) return currentPath
          const selectedPath = searchSelectedPath(note.children, currentPath)
          if (selectedPath.length > 0) return selectedPath
        }
        return ''
      }
      return searchSelectedPath(this.noteList)
    },
  },
  mounted() {
    this.init.language = this.lang // 現在の言語を入れる
  },
  methods: {
    // ...mapGetters({
    //   authenticated: 'authenticate/authenticated',
    // }),
    onAddNoteCommon: function (targetList, layer, index) {
      layer = layer || 1
      const note = {
        id: new Date().getTime().toString(16),
        name: `新規ノート-${layer}-${targetList.length}`,
        mouseover: false,
        editing: false,
        selected: false,
        children: [],
        layer: layer,
      }
      if (index == null) {
        targetList.push(note)
      } else {
        targetList.splice(index + 1, 0, note)
      }
    },
    onClickButtonAdd: function () {
      this.onAddNoteCommon(this.noteList)
    },
    onDeleteNote: function (parentNote, note) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      const index = targetList.indexOf(note)
      targetList.splice(index, 1)
    },
    onSelectNote(targetNote) {
      // 再帰的にノートの選択状態を更新
      const updateSelectStatus = function (targetNote, noteList) {
        for (let note of noteList) {
          note.selected = note.id === targetNote.id
          updateSelectStatus(targetNote, note.children)
        }
      }
      updateSelectStatus(targetNote, this.noteList)

      // 選択中ノート情報を更新
      this.selectedNote = targetNote
    },
    onEditNoteStart: function (editNote, parentNote) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      for (let note of targetList) {
        note.editing = note.id === editNote.id
        this.onEditNoteStart(editNote, note)
      }
    },
    onEditNoteEnd: function (parentNote) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      for (let note of targetList) {
        note.editing = false
        this.onEditNoteEnd(note)
      }
    },
    onAddChildNote: function (note) {
      this.onAddNoteCommon(note.children, note.layer + 1)
    },
    onAddNoteAfter: function (parentNote, note) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      const layer = parentNote == null ? 1 : note.layer
      const index = targetList.indexOf(note)
      this.onAddNoteCommon(targetList, layer, index)
    },
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block mt-6 lg:w-1/5 z-10 lg:sticky overflow-y-auto;
}
.main-body {
  @apply w-full lg:w-3/5 p-6 lg:pl-10;
}

.item {
  @apply duration-200 flex flex-col;
  &-title {
    @apply text-xs font-bold pt-4;
    color: var(--sub-color);
  }
  &-link {
    @apply duration-200 px-4 py-2 w-full h-full;
    color: var(--color);
    &:hover {
      @apply cursor-pointer;
      transform: translateX(5px);
      background: #f0f2f6;
      border-radius: 6px;
    }
  }
}
.title {
  color: var(--color);
}
.mce-content-body {
  pre[class*='language-'] {
    background-color: #282c34 !important;
    border-radius: 0.5rem !important;
    code {
      border-radius: 0.5rem !important;
    }
  }
}
</style>
