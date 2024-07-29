import { DirectiveBinding } from 'vue';
import * as echarts from 'echarts';

interface ResizeHTMLElement extends HTMLElement {
    _resizeObserver?: ResizeObserver;
    _chart?: echarts.ECharts;
}

export default {
    mounted(el: ResizeHTMLElement, binding: DirectiveBinding) {
        const chart = echarts.getInstanceByDom(el) || echarts.init(el);

        // Initial set options
        chart.setOption(binding.value);

        // Resize observer
        const resizeObserver = new ResizeObserver(() => {
            chart.resize();
        });

        resizeObserver.observe(el);

        el._resizeObserver = resizeObserver;
        el._chart = chart;
    },
    updated(el: ResizeHTMLElement, binding: DirectiveBinding) {
        const chart = el._chart;
        if (chart) {
            chart.setOption(binding.value);
        }
    },
    unmounted(el: ResizeHTMLElement) {
        const resizeObserver = el._resizeObserver;
        if (resizeObserver) {
            resizeObserver.disconnect();
        }
        const chart = el._chart;
        if (chart) {
            chart.dispose();
        }
    }
};
