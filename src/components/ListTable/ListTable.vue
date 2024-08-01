<template>
    <div class="list-table">
        <el-table
            ref="refElTable"
            lazy
            :load="load"
            :data="data"
            :stripe="stripe"
            :border="border"
            :height="tableHeight"
            :max-height="maxHeight"
            :tree-props="treeProps"
            :span-method="spanMethod"
            :default-expand-all="defaultExpandAll"
            :header-cell-style="
                Object.assign(
                    {
                        height: '44px',
                        color: '#2C3034',
                        'font-size': '14px',
                        'font-weight': '500',
                    },
                    headerStyle
                )
            "
            :cell-style="
                Object.assign(
                    {
                        height: '44px',
                        color: '#2C3034',
                        'font-size': '14px',
                    },
                    cellStyle
                )
            "
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot />
            <template #empty>
                <div class="empty-box">
                    <!-- <el-empty :image-size="200"></el-empty> -->
                    <img src="@/assets/pic_taost_03.png" alt="" class="img" />
                    <div class="text">暂无数据</div>
                </div>
            </template>
        </el-table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        // 树类型字段定义
        treeProps: {
            type: Object,
            default: () => {},
        },
        // 数据数组
        data: {
            type: Array,
            default: () => [],
        },
        // 表格高度
        height: {
            type: [String, Number],
            default: '',
        },
        maxHeight: {
            type: [String, Number],
            default: null,
        },
        // 是否带有纵向边框
        border: {
            type: Boolean,
            default: true,
        },
        // 是否斑马纹显示,默认不显示
        stripe: {
            type: Boolean,
            default: false,
        },
        // 表头样式
        headerStyle: {
            type: Object,
            default: () => {},
        },
        // 列表样式
        cellStyle: {
            type: Object,
            default: () => {},
        },
        // 合并行或列的计算方法字段定义
        spanMethod: {
            type: Function,
            default: () => {},
        },
        // 默认展开
        defaultExpandAll: {
            type: Boolean,
            default: false,
        },
        // 吸顶高度
        stickyHeight: {
            type: [Number, null],
            default: null,
        },
    },
    data() {
        return {
            tableHeight: null,
        }
    },
    watch: {},
    mounted() {
        // 窗体被改变
    },
    methods: {
        // 选中切换
        toggleSelection(rows: any[]) {
            if (rows) {
                rows.forEach((row: any) => {
                    this.$refs.refElTable.toggleRowSelection(row)
                })
            } else {
                this.$refs.refElTable.clearSelection()
            }
        },
        // 需要加载 - 树形数据
        load(tree: any, treeNode: any, resolve: any) {
            this.$emit('load', tree, treeNode, resolve)
        },
        // 排序 - 事件
        sortChange(val: any) {
            this.$emit('sortChange', val)
        },
        // 当选择项发生变化时会触发该事件
        selectionChange(selection: any, row: any) {
            this.$emit('selection-change', selection)
        },
        // 全选
        selectAll(selection: any, row: any) {
            this.$emit('select-all', selection)
        },
    },
})
</script>

<style lang="scss">
.list-table {
    .btn {
        cursor: pointer;
        color: #0066ff;
        margin-right: 16px;
        text-decoration: underline;
    }
    .del {
        cursor: pointer;
        color: #ff3969;
        margin-right: 16px;
        text-decoration: underline;
    }
    .shelves {
        cursor: pointer;
        color: #9398a6;
        margin-right: 16px;
        text-decoration: underline;
    }
    :deep() .el-table th.el-table__cell > .cell {
        padding-left: 16px;
        padding-right: 16px;
    }
    :deep() .el-table {
        .cell {
            padding-left: 16px;
            padding-right: 16px;
        }
        .cell:empty::before {
            content: '-';
        }
    }

    // 空数据
    .empty-box {
        padding: 30px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img {
            display: inline-block;
            width: 160px;
            max-width: 100%;
            margin-bottom: 20px;
        }
        .text {
            font-size: 12px;
            font-weight: 400;
            color: #000000;
            line-height: 12px;
        }
    }
}
</style>
