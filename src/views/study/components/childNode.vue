<template>
  <div class="commonModule" draggable="false" :style="styleObj" >
    <div class="moduleShape"
      @mouseout="handleOut()"
      @mousedown="handleDown(childItem, $event)"
      @click.stop="handleClick"
    >
      {{childItem.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildNode',
  props: {
    type: {
      type: String,
      default: ''
    },
    childItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    styleObj () {
      return {
        width: this.childItem.commonStyle.width + 'px',
        height: this.childItem.commonStyle.height + 'px',
        top: this.childItem.commonStyle.y + 'px',
        left: this.childItem.commonStyle.x + 'px',
        zIndex: this.childItem.commonStyle.zIndex,
      }
    },
  },
  data () {
    return {
    }
  },
  created () {
    console.log('child', this.childItem)
  },
  methods: {
    filterStyle () {
      return 
    },
    handleOut () {},
    //鼠标按下事件
    handleDown (childItem, e) {
      const { commonStyle: pos } = this.childItem
      let startY = e.clientY
      let startX = e.clientX
      let startTop = pos.y
      let startLeft = pos.x
      let firstTime = ''
      let lastTime = ''
      let move = moveEvent => {
        // !#zh 移动的时候，不需要向后代元素传递事件，只需要单纯的移动就OK
        moveEvent.stopPropagation()
        moveEvent.preventDefault()

        let currX = moveEvent.clientX
        let currY = moveEvent.clientY
        pos.y = currY - startY + startTop
        pos.x = currX - startX + startLeft
        // this.styleObj.top = pos.y + 'px'
        // this.styleObj.left = pos.x + 'px'
        this.childItem.commonStyle.zIndex = 20
        this.childItem.commonStyle.top = pos.y + 'px'
        this.childItem.commonStyle.left = pos.x + 'px'
      }
      let up = () => {
        lastTime = new Date().getTime()
        if ((lastTime - firstTime) > 200) {
          this.childItem.commonStyle.zIndex = 10
          this.$emit('resize')
        }
        document.removeEventListener('mousemove', move, true)
        document.removeEventListener('mouseup', up, true)
      }
      document.addEventListener('mousemove', move, true)
      document.addEventListener('mouseup', up, true)
      return true
    },
    // 获取point计算后样式
    handleClick () {
      console.log(this.childItem.name)
    },
  }
}
</script>

<style lang="scss" scoped>
.commonModule {
  position: absolute;
  border: 1px solid #000;
  &:hover {
    border: 1px dashed #1AB399;
  }
}
.moduleShape {
  width: 100%;
  height: 100%;
}
</style>