<template>
    <el-menu-item
        v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow"
        :index="item.path + '/' + item.children[0].path"
        :key="index + '_' + item.meta.title"
    >
        <router-link :to="item.path + '/' + item.children[0].path" :key="item.path + '/' + item.children[0].path" tag="li">
            <i v-if="item.meta.icon" class="iconfont" v-html="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
        </router-link>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path" :key="index +'_'+item.meta.title">
        <template #title>
            <i v-if="item.meta.icon" class="iconfont" v-html="item.meta.icon"></i>
            <!--这里和element2不同,在2里面会自动加上-->
            <span>{{ item.meta.title }}</span>
        </template>

        <template v-for="childRoute in item.children">
            <el-menu-item v-if="!childRoute.hidden" :index="item.path + '/' + childRoute.path" :key="item.path + '/' + childRoute.path">
                <router-link :to="item.path + '/' + childRoute.path" :key="item.path + '/' + childRoute.path" tag="li">
                    <i v-if="childRoute.meta.icon" class="iconfont" v-html="childRoute.meta.icon"></i>
                    <span>{{ childRoute.meta.title }}</span>
                </router-link>
            </el-menu-item>
        </template>
    </el-sub-menu>
</template>

<script>
export default {
    name: 'sidebarItem',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            onlyOneChild: null,
        };
    },
    components: {},
    computed: {},
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false;
                } else {
                    // Temp set(will be used if only has one showing child)
                    this.onlyOneChild = item;
                    return true;
                }
            });
            if (showingChildren.length === 1) {
                return true;
            }
            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
                return true;
            }

            return false;
        },
    },
};
</script>
<style lang="scss" scoped>
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
            overflow: hidden;
        }
    }
}
</style>
