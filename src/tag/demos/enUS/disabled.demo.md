# Disabled

```html
<n-space align="center" item-style="display: flex;">
  <n-tag closable @close="handleClose" :disabled="disabled"> Real Love </n-tag>
  <n-tag type="success" closable :disabled="disabled" @close="handleClose">
    Yes It Is
  </n-tag>
  <n-tag type="warning" closable :disabled="disabled" @close="handleClose">
    I'm Down
  </n-tag>
  <n-tag type="error" closable :disabled="disabled" @close="handleClose">
    Yesterday
  </n-tag>
  <n-tag type="info" closable :disabled="disabled" @close="handleClose">
    I'm Looking Through You
  </n-tag>
  <n-switch v-model:value="disabled" />
</n-space>
```

```js
export default {
  inject: ['message'],
  methods: {
    handleClose () {
      this.message.info('tag close')
    }
  },
  data () {
    return {
      disabled: true
    }
  }
}
```