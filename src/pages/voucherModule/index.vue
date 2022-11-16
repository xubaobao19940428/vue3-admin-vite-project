<!--  -->
<template>
	<div class="common_set app-container">
		<div class="main-content-wrapper">
			<div class="product-header el-card__header">
				<el-form :inline="true" :model="queryData" class="demo-form-inline">
					<el-form-item label="订单编号:">
						<el-input v-model="queryData.orderId" placeholder="订单编号" clearable></el-input>
					</el-form-item>
					<el-form-item label="支付渠道:">
						<el-select clearable v-model="queryData.payChannel" placeholder="请选择">
							<el-option v-for="item in payChannelOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="支付状态:">
						<el-select v-model="queryData.payStatus" clearable placeholder="请选择">
							<el-option v-for="item in payStatusOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="queryList(1)">搜索</el-button>
						<el-button type="info" @click="resetSearch">重置</el-button>
					</el-form-item>
				</el-form>
			</div>

			<div class="table-detail">
				<el-table :data="tableData" border stripe style="width: 100%" height="100%">
					<el-table-column label="订单ID" align="center" prop="order.id">
						<template #default="scope">
							<div>{{ scope.row.order.id ? scope.row.order.id : '' }}</div>
						</template>
					</el-table-column>
					<el-table-column label="用户ID" align="center">
						<template #default="scope">
							<div>{{ scope.row.order.userId ? scope.row.order.userId : '' }}</div>
						</template>
					</el-table-column>

					<el-table-column label="支付方式" align="center" width="200">
						<template #default="scope">
							<el-tag type="primary" v-if="scope.row.order.payChannel == 1">币安扫码</el-tag>
							<el-tag type="warning" v-else-if="scope.row.order.payChannel == 2">币安转账</el-tag>
							<el-tag type="primary" v-else-if="scope.row.order.payChannel == 3">strill支付</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="状态" align="center" width="200">
						<template #default="scope">
							<el-tag type="success" v-if="scope.row.order.payStatus == 3">审核通过支付成功</el-tag>
							<el-tag type="danger" v-else-if="scope.row.order.payStatus == 4">审核拒绝支付失败</el-tag>
							<el-tag type="primary" v-else-if="scope.row.order.payStatus == 2">待审核凭证</el-tag>
							<el-tag type="info" v-else-if="scope.row.order.payStatus == 1">待提交凭证</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="商品名称" align="center" width="200">
						<template #default="scope">
							<div>{{ scope.row.order.title ? scope.row.order.title : '' }}</div>
						</template>
					</el-table-column>
					<el-table-column label="商品价格(美元)" align="center" width="200">
						<template #default="scope">
							<div>{{ scope.row.order.amount ? scope.row.order.amount : '' }}</div>
						</template>
					</el-table-column>
					<el-table-column label="商品价格(USDT)" align="center" width="200">
						<template #default="scope">
							<div>{{ scope.row.order.usdt ? scope.row.order.usdt : '' }}</div>
						</template>
					</el-table-column>
					<el-table-column label="凭证" align="center">
						<template #default="scope">
							<img style="width: 80px; height: 80px; margin: 0 auto" :src="scope.row.voucher.voucherUrl" alt="" v-if="scope.row.voucher" />
						</template>
					</el-table-column>
					<el-table-column label="操作" fixed="right" align="center">
						<template #default="scope">
							<span class="table-opreator" @click="showDialog(scope.row.voucher.voucherUrl, scope.row.order.id, scope.row.order.payStatus, scope.row.order.amount)" v-if="scope.row.order.payStatus == 2">去审核</span>
                            <span v-else>- -</span>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
		<div class="pagination-box">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50]" :page-size="queryData.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
		</div>
		<!-- <showDialog :centerDialogVisible="centerDialogVisible" :voucherUrl="voucherUrl" :id="id" :amount="amount" :auditStatus="auditStatus" @close-dialog="closeDialog" @data-list="queryList" @confirm-form="confirmForm"></showDialog> -->
	</div>
</template>

<script>
import { ref, reactive } from 'vue'
// import { queryBossPayVoucherList } from '@/api/newJson/money.js'
// import showDialog from './components/showDialog.vue'
export default {
	data() {
		return {
			id: null,
			amount: null,
			auditStatus: null,
			voucherUrl: null,
			centerDialogVisible: false,
			queryData: {
				pageNum: 1,
				pageSize: 20,
				orderId: '',
				payChannel: '',
				payStatus: '',
			},
			total: 0,
			payChannelOptions: [
				{
					value: 1,
					label: '币安扫码支付',
				},
				{
					value: 2,
					label: '币安转账',
				},
				{
					value: 3,
					label: 'strill支付',
				},
			],
			payStatusOptions: [
				{
					value: 1,
					label: '待提交凭证',
				},
				{
					value: 2,
					label: '待审核凭证',
				},
				{
					value: 3,
					label: '审核通过支付成功',
				},
				{
					value: 4,
					label: '审核拒绝支付失败',
				},
			],
			tableData: [],
		}
	},
	components: {
		// noDataComponent,
		// showDialog,
	},
	computed: {},
	mounted() {
		// this.getConfigList(1);
		// this.queryList()
	},
	methods: {
        resetSearch(){
            
				this.queryData.pageNum= 1
				this.queryData.orderId=''
				this.queryData.payChannel=''
				this.queryData.payStatus=''
                this.queryList()
        },
		queryList() {
			queryBossPayVoucherList(this.filterData(this.queryData)).then((res) => {
				console.log(res)
				this.tableData = res.data
				this.total = res.total
			})
		},
		showDialog(voucherUrl, id, auditStatus, amount) {
			this.voucherUrl = voucherUrl
			this.centerDialogVisible = true
			this.auditStatus = auditStatus
			this.amount = amount
			this.id = id
		},
		closeDialog() {
			this.centerDialogVisible = false
		},
		// getConfigList(type) {
		//     if (type == 1) {
		//         this.queryData.pageNum = 1;
		//     }
		//     configList(this.filterData(this.queryData))
		//         .then(resultes => {
		//             if (resultes.data) {
		//                 this.tableData = resultes.data;
		//                 this.total = resultes.total;
		//             }
		//         })
		//         .catch(error => {});
		// },
		handleSizeChange(val) {
			this.queryData.pageSize = val
			this.queryList()
		},
		handleCurrentChange(val) {
			this.queryData.pageNum = val
			this.queryList()
		},
	},
}
</script>

<style lang="scss" scoped>
.common_set {
	width: 100%;
	height: 100%;
	.product-list-header {
		background-color: #fff;
		padding: 0 10px;
		.demo-form-inline {
			margin-top: 20px;
		}
	}
	.main-content-wrapper {
		background-color: #fff;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		.product-header {
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ddd;
			align-items: center;
			padding: 10px;
			// margin-bottom: 10px;
		}
		.table-detail {
			// height: 100%;
			// .el-table {
			overflow: scroll;
			flex: 1;
			// }
		}
	}
	:deep().el-popover {
		width: auto !important;
	}
	.image-box {
		height: 70px;
		width: 70px;
	}
	.block-right {
		height: 70px;
	}
	.table-opreator {
		color: #409eff;
		margin-left: 10px;
		cursor: pointer;
		&-delete {
			margin-left: 10px;
			color: #f56c6c;
			cursor: pointer;
		}
	}
}
</style>
