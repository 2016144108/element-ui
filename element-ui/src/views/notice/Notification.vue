<template>
    <div class="notification-container">

        <!--this.$notify({
        title: '',//通知标题
        message: '这是一条左上角的消息',//通知文字主体
        type:'success',//通知状态-info-success-warning-error,默认info
        position: 'top-left',//位置
        duration: 0,//显示时间0不消失
        showClose: false,//是否隐藏关闭按钮
        });-->
        <h1>基本用法</h1>
        <el-button plain @click="open1">
            可自动关闭
        </el-button>
        <el-button plain @click="open2">
            不会自动关闭
        </el-button>


        <h1>状态通知</h1>
        <el-button plain @click="open3">
            通知
        </el-button>
        <el-button plain @click="open4">
            成功
        </el-button>
        <el-button plain @click="open5">
            警告
        </el-button>
        <el-button plain @click="open6">
            错误
        </el-button>


        <h1>自定义弹出位置</h1>
        <el-button plain @click="open7">
            左上角
        </el-button>
        <el-button plain @click="open8">
            右上角
        </el-button>
        <el-button plain @click="open9">
            右下角
        </el-button>
        <el-button plain @click="open10">
            左下角
        </el-button>


        <h1>隐藏关闭按钮</h1>
        <el-button plain @click="open11">
            隐藏关闭
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "Notification",
        methods:{
            open1() {
                this.$notify({
                    title: '提示',
                    message: '这是一条可以自动关闭的消息',
                });
            },
            open2() {
                this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                });
            },
            open3() {
                this.$notify({
                    title: '通知',
                    message: '这是一条通知的消息',
                    type:'info',
                });
            },
            open4() {
                this.$notify({
                    title: '成功',
                    message: '这是一条成功的消息',
                    type:'success',
                });
            },
            open5() {
                this.$notify({
                    title: '警告',
                    message: '这是一条警告的消息',
                    type:'warning',
                });
            },
            open6() {
                this.$notify({
                    title: '错误',
                    message: '这是一条错误的消息',
                    type:'error',
                });
            },

            open7() {
                this.$notify({
                    title: '提示',
                    message: '这是一条左上角的消息',
                    type:'success',
                    position: 'top-left',
                });
            },
            open8() {
                this.$notify({
                    title: '提示',
                    message: '这是一条右上角的消息',
                    type:'success',
                    position: 'top-right',
                });
            },
            open9() {
                this.$notify({
                    title: '提示',
                    message: '这是一条右下角的消息',
                    type:'success',
                    position: 'bottom-right'
                });
            },
            open10() {
                this.$notify({
                    title: '提示',
                    message: '这是一条左下角的消息',
                    type:'success',
                    position: 'bottom-left',
                });
            },
            open11(){
                this.$notify({
                    title:'提示',
                    message:'这个通知没有关闭按钮',
                    type:'success',
                    showClose: false,
                })
            }
        }
    }
</script>

<style scoped>

</style>
