<template>
    <div class="progress-container">

        <!--:percentage&#45;&#45;比例占比
        :format&#45;&#45;进度条文字内容
        status&#45;&#45;状态-->
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="100" :format="format"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="100" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>

        <!--:text-inside&#45;&#45;比例内显
        :stroke-width&#45;&#45;高度-->
        <!--type&#45;&#45;显示样式-->
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
        <br>
        <br>
        <el-progress :format="format" :text-inside="true" :stroke-width="24" :percentage="percentage" :color="customColors"></el-progress>
        <el-progress :format="format" :text-inside="true" :stroke-width="24" :percentage="percentage" :color="customColorMethod"></el-progress>
        <div>
            <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
            </el-button-group>
        </div>


        <el-progress type="circle" :percentage="50"></el-progress>
        <el-progress type="circle" :percentage="100" :format="format"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="100" status="warning"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>

        <el-progress type="circle"  :format="format" :percentage="percentage" :color="customColorMethod"></el-progress>
        <div>
            <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
            </el-button-group>
        </div>

        <el-progress type="dashboard" :percentage="50"></el-progress>
        <el-progress type="dashboard" :percentage="100" :format="format"></el-progress>
        <el-progress type="dashboard" :percentage="100" status="success"></el-progress>
        <el-progress type="dashboard" :percentage="100" status="warning"></el-progress>
        <el-progress type="dashboard" :percentage="50" status="exception"></el-progress>

        <el-progress type="dashboard"  :format="format" :percentage="percentage" :color="customColorMethod"></el-progress>
        <div>
            <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
            </el-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        data() {
            return {
                percentage: 20,
                customColors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
                ]
            };
        },
        methods: {
            customColorMethod(percentage) {
                if (percentage < 30) {
                    return '#909399';
                } else if (percentage < 70) {
                    return '#e6a23c';
                } else {
                    return '#67c23a';
                }
            },
            increase() {
                this.percentage += 10;
                if (this.percentage > 100) {
                    this.percentage = 100;
                }
            },
            decrease() {
                this.percentage -= 10;
                if (this.percentage < 0) {
                    this.percentage = 0;
                }
            },
            format(percentage) {
                return percentage === 100 ? 'OK' : `${percentage}%`;
            }
        },
    }
</script>

<style scoped>

</style>
