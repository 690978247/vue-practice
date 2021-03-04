<template>
  <div class="canvas-page">
    <div class="btn-groups">
      <div v-for="(item, key) in btns" :key="key" class="btn" draggable @dragstart="handleStart($event, item)" @drag="handleDrag($event, item)" >{{item.name}}</div>
    </div>
    <div class="canvas-wrap" 
      @dragover.prevent
      @dragenter="dragenter"
      @dragleave="dragleave"
      @dragover="dragovers"
      @drop="drops"
      ref="wrap"
      id="wrap"
      >
      <div class="wrap" >
      <!-- <canvas id="canvas" ref="canvas" :width="width" :height="height" class="canvas">
        Your browser does not support the canvas element.
      </canvas> -->
        <child-node
          v-for="(item, index) in childNodes"
          :key="index"
          :child-item="{ ...item, index }"
          @resize="handleElementResize">
          </child-node>
      </div> 
    </div>
  </div>
</template>

<script>
import childNode from '../components/childNode'

export default {
  name: 'Canvas',
  components: {
    childNode
  },
  data () {
    return {
      width: 1200,
      height: 900,
      btns: [
        {
          icon: '',
          name: '直线',
          type: 'line',
          width: 200,
          height: 40,
          zIndex: 10,
        },
        {
          icon: '',
          name: '椭圆',
          type: 'ellipse',
          width: 200,
          height: 60,
          zIndex: 10,
        },
        {
          icon: '',
          name: '矩形',
          type: 'rectangle',
          width: 200,
          height: 140,
          zIndex: 10,
        },
        {
          icon: '',
          name: '按钮',
          type: 'btn',
          width: 200,
          height: 40,
          zIndex: 10,
        }
      ],
      childNodes: []
    }
  },
  created () {
    // this.$nextTick(() => {
    //   // let ax,ay,x,y;
    //   // var c = document.getElementById("canvas")
    //   // var cxt = c.getContext("2d")
    //   // cxt.fillStyle="#FF0000"
    //   // cxt.beginPath()
    //   // cxt.arc(70,18,15,0,Math.PI*2,true)
    //   // cxt.closePath()
    //   // cxt.fill()
    // })
  },
  methods: {
    // 移动改变元素大小定位
    handleElementResize (pos, index) {
      // if (this.childNodes[index]) {
      //   this.childNodes[index].commonStyle = pos
      //   console.log(this.childNodes[index].commonStyle)
      // }
    },

    handleStart (e, item) {
      // if (e.target)
      e.dataTransfer.setData("data", JSON.stringify(item));
      e.dataTransfer.effectAllowed = 'copyMove'
    },
    handleDrag (e, data) {
      e.preventDefault()
    },
    drops (event) {
      console.log('drops')
      // 父级元素id = wrap的网页可见区域上、左的距离
      let fatherY = this.$refs.wrap.offsetTop
      let fatherX = this.$refs.wrap.offsetLeft

      // 拖动元素距离网页可见区域上、左的距离
      let targetX =  event.clientX
      let targetY =  event.clientY
       // 获取dragstart事件传递的参数
      let data = JSON.parse(event.dataTransfer.getData('data'))
      // 清除dragstart事件传递的参数
      event.dataTransfer.clearData()
      
      this.childNodes.push({
        name: data.name,
        type: data.type,
        commonStyle: {
          x: targetX - fatherX,
          y: targetY - fatherY,
          width: data.width,
          height: data.height,
          zIndex: data.zIndex
        },
        pointList: ['lt', 'rt', 'lb', 'rb', 'l', 'r', 't', 'b'],
      })
    },
    dragenter (event) {
      console.log('enter')
    },
    dragleave () {},
    dragovers (event) {
       if (event.target.classList.contains('allowed')) {
         event.dataTransfer.dropEffect = 'move'
       } else {
         event.dataTransfer.dropEffect = 'copy'
       }
       event.preventDefault()
    },
  }
}
</script>

<style lang="scss" scoped>
.edit-shape-point {
  width: 8px;
  height: 8px;
  background-color: #fff;
  border: 1px solid #59c7f9;
  border-radius: 8px;
  position: absolute;
  z-index: 1001;
}
.canvas-page {
  width: 100%;
  height: 100%;
  background: #353535;
  display: flex;
}
.btn-groups {
  width: 200px;
  height: 100%;
  background: #3d3d3d;
  text-align: center;
  user-select: none;
  .btn {
    color: #ccc;
    padding: 8px;
    cursor: pointer;
    border-bottom: 1px solid #404040;
    transition: All 0.3s ease-in-out;
    &:hover {
      background: #fff;
      border: 1px solid #1ab399;
      color: #1ab399;
    }
  }
}
.canvas-wrap {
  width: calc(100% - 200px);
  height: 100%;
  overflow: auto;
  text-align: center;
  position: relative;
  // .canvas {
    background: #ccc;
  // }
  .wrap {
    width: 100%;
    height: 100%;
  }
}
</style>