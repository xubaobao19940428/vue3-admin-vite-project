<template>
    <div v-echartsResize="chartOptions" ref="chart" class="line-chart"></div>
</template>

<script setup lang="ts" name="LineCharts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as echarts from 'echarts'

const chart = ref(null)
let myChart: echarts.ECharts | null = null

const chartOptions = ref({
    legend: {
        // data: ['折线图A', '折线图B'],
        // left: 'center',
    },
    tooltip: {
        show: true,
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '折线图A',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
        },
        {
            name: '折线图B',
            data: [100, 100, 120, 180, 170, 120, 140],
            type: 'line',
        },
    ],
})

onMounted(() => {
    myChart = echarts.init(chart.value)
    myChart.setOption(chartOptions.value)
})

onBeforeUnmount(() => {
    if (myChart) {
        myChart.dispose()
    }
})
</script>

<style scoped>
/* 样式可以根据需要进行调整 */
.line-chart {
    width: 100%;
    height: 100%;
}
</style>
