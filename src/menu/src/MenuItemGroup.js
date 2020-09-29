import { h } from 'vue'
import { render } from '../../_utils/vue'
import { itemRenderer } from './utils'
import menuChildMixin from './menu-child-mixin'

export default {
  name: 'MenuItemGroup',
  mixins: [
    menuChildMixin
  ],
  provide () {
    return {
      NMenuItemGroup: this,
      NSubmenu: null
    }
  },
  props: {
    children: {
      type: Array,
      required: true
    }
  },
  render () {
    return h('div', {
      class: 'n-menu-item-group'
    }, [
      h('span', {
        class: 'n-menu-item-group-title',
        style: `padding-left: ${this.delayedPaddingLeft}px;`
      }, [
        h(render, {
          render: this.title
        })
      ]),
      h('div', this.children.map(item => itemRenderer(item)))
    ])
  }
}
