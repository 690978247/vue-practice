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
      >
      <div id="wrap" class="wrap" >
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
          type: 'line'
        },
        {
          icon: '',
          name: '椭圆',
          type: 'ellipse'
        },
        {
          icon: '',
          name: '矩形',
          type: 'rectangle'
        },
        {
          icon: '',
          name: '按钮',
          type: 'btn'
        }
      ],
      childNodes: [],
      projectData: {
         // 页面初始样式
        commonStyle: {
          backgroundColor: '#f4f4f4'
        },
        config: {}, // 页面信息配置
        width: 1200,
        height: 900,
        elements: [] // 页面容器集合
      }
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
      console.log(e.target)
      // if (e.target)
      e.dataTransfer.setData("data", JSON.stringify(item));
      e.dataTransfer.effectAllowed = 'copyMove'
    },
    handleDrag (e, data) {
      e.preventDefault()
    },
    drops (event) {
      console.log('drops')
       // 获取dragstart事件传递的参数
      let data = JSON.parse(event.dataTransfer.getData('data'))
      // 清除dragstart事件传递的参数
      event.dataTransfer.clearData()
      
      this.childNodes.push({
        name: data.name,
        type: data.type,
        commonStyle: {
          x: event.offsetX,
          y: event.offsetY,
          width: 200,
          height: 40,
        },
        pointList: ['lt', 'rt', 'lb', 'rb', 'l', 'r', 't', 'b'],
      })
    },
    dragenter (event) {
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
    // handleDrop (e) {
    //   e.preventDefault()
    //   console.log('x: ' + e.offsetX, 'y: ' + e.offsetY)
    //   var name = e.dataTransfer.getData('name')
    //   var type = e.dataTransfer.getData('type')
    //   var wrap = document.getElementById('wrap')
    //   if (name && type) {
    //   var div = document.createElement('div')
    //     div.style.cssText = `position: absolute; top: ${e.offsetY}px; left: ${e.offsetX}px; width: 100px; height: 80px; border: 1px solid #000`
    //     div.setAttribute('draggable', true)
    //     // div.style.cssText = `background: red`
    //     wrap.append(div)
    //   } else {
    //     debugger
    //     console.log(e.target)
    //     // e.target.style.cssText = `position: absolute; top: ${e.target.offsetY}px; left: ${e.target.offsetX}px; width: 100px; height: 80px; border: 1px solid #000`
    //     // e.target.style.top = e.target.offsetY + 'px'
    //     // e.target.style.left = e.target.offsetX + 'px'
    //   }
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