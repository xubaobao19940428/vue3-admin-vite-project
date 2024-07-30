<template>
    <div v-echartsResize="chartOptions" ref="chart" class="pie-chart"></div>
</template>

<script setup lang="ts" name="PieCharts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as echarts from 'echarts'

const chart = ref(null)
let myChart = null

const chartOptions = ref({
    title: {
        text: '饼图',
        subtext: '饼图数据',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
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
.pie-chart {
    width: 100%;
    height: 100%;
}
</style>
