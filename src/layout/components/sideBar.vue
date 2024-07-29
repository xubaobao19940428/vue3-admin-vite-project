<!--  -->
<template>
	<div class="memall_nav">
		<el-menu
			unique-opened
			class="el-menu-vertical-demo"
			:default-active="activePath"
			:collapse="isCollapse"
			text-color="#ffffff"
			active-text-color="#409EFF"
			background-color="#222d32"
		>
			<!-- <h5 v-if="!isCollapse">
                <img src="@/assets/icon/logo-right.png" alt="" class="false-collapse" @click="gotoDashboard" />
                <span></span>
            </h5>
            <h5 v-else>
                <img src="@/assets/icon/100px.png" alt="" class="true-collapse" @click="gotoDashboard" />
            </h5> -->
			<sidebar-item
				v-for="(route, index) in routers"
				:key="route.path + index"
				:item="route"
			></sidebar-item>
		</el-menu>
	</div>
</template>

<script>
import { useSystemState } from '@/store/system'
import { mapState } from 'pinia'
import sidebarItem from './sidebarItem.vue'

export default {
   
	name: 'sideBar',
	props: {
		routers: {
			type: Array,
			default: () => {
				return []
			},
		},
	},
	data() {
		return {}
	},

	components: {
		sidebarItem,
	},

	computed: {
		...mapState(useSystemState,['isCollapse']),
		activePath() {
			return this.$route.path
		},
	},

	mounted() {
        console.log(this.$route.path)
    },

	methods: {
		gotoDashboard() {
			this.$router.push({
				name: 'dashboard',
			})
		},
	},
}
</script>
<style lang="scss" scoped>
.memall_nav {
	height: 100%;
}
.el-menu {
	h5 {
		margin-top: 10px;
		height: 60px;
		text-align: center;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			// margin-right: 10px;
			cursor: pointer;
		}
		.false-collapse {
			width: 150px;
			height: 48px;
		}
		.true-collapse {
			width: 40px;
			height: 40px;
		}
		span {
			white-space: nowrap;
		}
	}
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 221px;
	height: 100%;
}
.el-menu-vertical-demo {
	height: 100%;
	i {
		color: #fff;
		margin-right: 20px;
		font-size: 18px;
	}
	.el-menu-item {
		a {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
}
</style>
