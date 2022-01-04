<template>
  <div class="widget-family">
    <div
      class="widget"
      :class="{ mouseover: widget.mouseover }"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <template v-if="propsWidget.type == 'heading'">
        <input
          :ref="'widget-heading-' + propsWidget.id"
          v-model="propsWidget.text"
          class="heading transparent"
          placeholder="見出し"
          @keypress.enter="onClickAddWidgetAfter(parentWidget, propsWidget)"
          @keydown.tab="onKeydownTab"
          @keydown.delete="onKeydownDelete"
        />
      </template>
      <template v-if="propsWidget.type == 'body'">
        <input
          :ref="'widget-body-' + propsWidget.id"
          v-model="propsWidget.text"
          class="body transparent"
          placeholder="本文"
          @keypress.enter="onClickAddWidgetAfter(parentWidget, propsWidget)"
          @keydown.tab="onKeydownTab"
          @keydown.delete="onKeydownDelete"
        />
      </template>
      <template v-if="propsWidget.type == 'code'">
        <textarea
          :ref="'widget-code-' + propsWidget.id"
          v-model="propsWidget.text"
          class="code"
          rows="1"
          placeholder="コード"
          @keydown.delete="onKeydownDelete"
        ></textarea>
      </template>
      <div v-show="propsWidget.mouseover" class="buttons">
        <div
          v-if="layer < 3"
          class="button-icon"
          @click="onClickChildWidget(propsWidget)"
        >
          <i class="fas fa-sitemap"></i>
        </div>
        <div
          class="button-icon"
          @click="onClickAddWidgetAfter(parentWidget, propsWidget)"
        >
          <i class="fas fa-plus-circle"></i>
        </div>
        <div
          class="button-icon"
          @click="onClickDelete(parentWidget, propsWidget)"
        >
          <i class="fas fa-trash"></i>
        </div>
        <div class="button-icon">
          <i class="fas fa-cog" data-toggle="dropdown"></i>
          <div class="dropdown-menu">
            <a class="dropdown-item" @click="propsWidget.type = 'heading'">
              見出し
            </a>
            <a class="dropdown-item" @click="propsWidget.type = 'body'">本文</a>
            <a class="dropdown-item" @click="propsWidget.type = 'code'">
              ソースコード
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="child-widget">
      <draggable :list="widget.children" group="widgets">
        <WidgetItem
          v-for="childWidget in widget.children"
          :key="childWidget.id"
          :widget="childWidget"
          :parent-widget="widget"
          :layer="layer + 1"
          @delete="onClickDelete"
          @addChild="onClickChildWidget"
          @addWidgetAfter="onClickAddWidgetAfter"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'WidgetItem',
  components: {
    draggable,
  },
  props: {
    widget: {
      type: Object,
      default: () => {},
    },
    parentWidget: {
      type: Object,
      default: () => {},
    },
    layer: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    propsWidget: {
      get() {
        return this.widget
      },
      set(newVal) {
        this.$emit('childWidget', newVal)
      },
    },
  },
  watch: {
    'widget.text'() {
      this.resizeCodeTextarea()
    },
  },
  mounted() {
    const input = this.$refs[`widget-${this.widget.type}-${this.widget.id}`]
    input.focus()
  },
  methods: {
    onMouseOver() {
      this.propsWidget.mouseover = true
    },
    onMouseLeave() {
      this.propsWidget.mouseover = false
    },
    onClickDelete(parentWidget, widget) {
      this.$emit('delete', parentWidget, widget)
    },
    onClickChildWidget(widget) {
      this.$emit('addChild', widget)
    },
    onClickAddWidgetAfter(parentWidget, widget) {
      this.$emit('addWidgetAfter', parentWidget, widget)
    },
    onKeydownTab(e) {
      if (this.widget.layer < 3) {
        this.$emit('addChild', this.widget)
      }
      e.preventDefault()
    },
    onKeydownDelete(e) {
      if (this.widget.text.length === 0) {
        this.$emit('delete', this.parentWidget, this.widget)
        e.preventDefault()
      }
    },
    resizeCodeTextarea() {
      if (this.widget.type !== 'code') return
      const textarea = this.$refs[`widget-code-${this.widget.id}`]
      const promise = new Promise(function (resolve) {
        resolve((textarea.style.height = 'auto'))
      })
      promise.then(function () {
        textarea.style.height = textarea.scrollHeight + 'px'
      })
    },
  },
}
</script>

<style scoped lang="scss">
.widget {
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: rgba(25, 23, 17, 0.6);
  .buttons {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    .button-icon {
      padding: 3px;
      margin-left: 3px;
      border-radius: 5px;
    }
  }
  input.heading {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1.5px solid #e0e0e0;
  }
  input.body {
    font-size: 16px;
  }
  .code {
    width: calc(100% - 120px);
    height: 35px;
    padding: 5px 10px;
    border: none;
    border-radius: 8px;
    color: #f8f8f2;
    background: #282a36;
    font-size: 14px;
    font-family: Consolas, Menlo, 'Liberation Mono', Courier, monospace;
    resize: none;
  }
  .code:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.child-widget {
  padding-left: 10px;
}
</style>
