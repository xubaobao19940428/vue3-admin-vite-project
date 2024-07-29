<!--
 * home.vue
 * @author: AUTHOR
 * @description: DESCRIPTION
 * @since: 2024-07-29
-->
<template>
    <div class="home">
        <div class="home-header">
            <el-row :gutter="20">
            <el-col :span="4">
                <el-card>
                    <div class="icon-left">
                        <i class="iconfont icon-qiandai"></i>
                    </div>
                    <div class="icon-right">
                        <div class="icon-right-label">金钱</div>
                        <VueCountTo :start-val="0" :end-val="1200" :decimals="0" :duration="2000"></VueCountTo>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="icon-left">
                        <i class="iconfont icon-dingdan"></i>
                    </div>
                    <div class="icon-right">
                        <div class="icon-right-label">订单</div>
                        <VueCountTo :start-val="0" :end-val="1210" :decimals="0" :duration="2000"></VueCountTo>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="icon-left">
                        <i class="iconfont icon-fangwen"></i>
                    </div>
                    <div class="icon-right">
                        <div class="icon-right-label">访问量</div>
                        <VueCountTo :start-val="0" :end-val="1320" :decimals="0" :duration="2000"></VueCountTo>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="icon-left">
                        <i class="iconfont icon-renshu"></i>
                    </div>
                    <div class="icon-right">
                        <div class="icon-right-label">人数</div>
                        <VueCountTo :start-val="0" :end-val="1500" :decimals="0" :duration="2000"></VueCountTo>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="icon-left">
                        <i class="iconfont icon-fangwen"></i>
                    </div>
                    <div class="icon-right">
                        <div class="icon-right-label">访问量</div>
                        <VueCountTo :start-val="0" :end-val="1200" :decimals="0" :duration="2000"></VueCountTo>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="icon-left">
                        <i class="iconfont icon-renshu"></i>
                    </div>
                    <div class="icon-right">
                        <div class="icon-right-label">人数</div>
                        <VueCountTo :start-val="0" :end-val="1200" :decimals="0" :duration="2000"></VueCountTo>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        </div>
       
        <el-row :gutter="20">
            <el-col :span="12">
                <LineCharts></LineCharts>
            </el-col>
            <el-col :span="12">
                <BarCharts></BarCharts>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts" name="Home">
import { ref } from 'vue'
import LineCharts from '@/components/Charts/LineCharts.vue'
import BarCharts from '@/components/Charts/BarCharts.vue'

import VueCountTo from '@/components/VueCountTo/VueCountTo.vue'
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    box-sizing: border-box;
    .home-header{
        height:200px;
    }
    .el-row {
        flex: 1;
        .el-col {
            &:nth-child(1) {
                :deep(.el-card) {
                    background-color: aquamarine;
                }
            }
            &:nth-child(2) {
                :deep(.el-card) {
                    background-color: aqua;
                }
            }
            &:nth-child(3) {
                :deep(.el-card) {
                    background-color: bisque;
                }
            }
            &:nth-child(4) {
                :deep(.el-card) {
                    background-color: blanchedalmond;
                }
            }
        }

        :deep(.el-card__body) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            // background-color:#111;

            .icon-left {
                width: 50px;
                height: 50px;
                text-align: center;
                line-height: 50px;

                background-color: #fff;
                transition: all 0.5s;
                .iconfont {
                    font-size: 40px;
                }
                &:hover {
                    background-color: rgb(160, 87, 87);
                    .iconfont {
                        color: blue;
                    }
                }
            }
            .icon-right {
                .icon-right-label {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                span {
                    font-size: 20px;
                    font-weight: 600;
                    font-family: monospace;
                    color: red;
                }
            }
        }
    }
}
</style>
