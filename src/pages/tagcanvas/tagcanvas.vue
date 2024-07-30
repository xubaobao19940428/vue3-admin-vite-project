<!--
 * tagcanvas.vue
 * @author: AUTHOR
 * @description: DESCRIPTION
 * @since: 2024-07-30
-->
<template>
    <div class="container">
        <div class="label">tagcanvas Demo词云加图的效果</div>
        <div id="myCanvasContainer">
            <canvas width="200" height="200" id="myCanvas" ref="canvasDom">
                <p>换个现代浏览器吧！</p>
            </canvas>
        </div>
        <div id="tags">
            <ul>
                <li v-for="(tag, index) in members" :key="index">
                    <a class="show_img_detail" @click.prevent="clickTo(tag)">
                        <div>
                            <img
                                :src="tag.pic"
                                alt=""
                                :style="{
                                    width: 40 * tScale + 'px',
                                    height: 40 * tScale + 'px',
                                }"
                            />
                            <span>
                                {{ tag.text }}
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeMount, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
const canvasDom = ref(null)
const tScale = ref(window.devicePixelRatio || 1)
const members = ref(
    new Array(30).fill({
        pic: 'https://fastly.picsum.photos/id/75/200/300.jpg?hmac=sjSIzdmDj0dZefwBIN61pwl3azxymhEGh9owb8ZEgxg',
        text: 'test1',
    })
)

const init = () => {
    let tWidth = document.body.offsetWidth
    try {
        TagCanvas.Start('myCanvas', 'tags', {
            // bgColour:'#ccc',
            textColour: '#111',
            dragControl: 1,
            decel: 0.1,
            textHeight: 12 * tScale.value,
            txtOpt: true,
            minSpeed: 0.01,
            bgOutline: null,
            imageMode: 'both',
            imagePosition: 'top',
            imageRadius: '50%',
            outlineColour: null,
            // offsetX:-tWidth,
            outlineMethod: 'none',
            textBgColor: '#000000',
            zoom: 1,
            maxSpeed: 0.01,
            weight: true,
            weightGradient: "{0:'#f00', 0.33:'#ff0',0.66:'#0f0', 1:'#00f'}",
            initial: [0.05, -0.05],
        })
    } catch (e) {
        console.log('错误信息', e)
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none'
    }
}
const clickTo = (data) => {
    ElMessage.success('点击了词云效果')
}
onMounted(() => {
    var canvas = canvasDom.value
    let tWidth = document.body.offsetWidth
    let tHeight = 500
    canvas.style.width = tWidth + 'px'
    canvas.style.height = tHeight + 'px'
    canvas.width = tWidth * tScale.value
    canvas.height = tHeight * tScale.value
    nextTick(function () {
        init()
    })
})
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#tags {
    position: absolute;
    bottom: 1000px;
}
</style>
