<!--
 * table.vue
 * @author: AUTHOR
 * @description: DESCRIPTION
 * @since: 2024-08-01
-->
<template>
    <div class="container">
        <ListTable :data="tableData">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </ListTable>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ListTable from '@/components/ListTable/ListTable.vue'
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
])
</script>

<style lang="scss" scoped></style>
