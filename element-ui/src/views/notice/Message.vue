<template>
    <!--Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，
    可以结合 Notification 的文档理解它们。Element 注册了一个$message方法用于调用，
    Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。-->

    <!--this.$message({
    message: '',//提示信息
    type: ''//信息状态-info-success-warning-error,
    showClose: true//是否关闭,
    center: true//文字是否居中,
    });-->
    <div class="message-container">
        <h1>基础用法</h1>
        <el-button plain="true" @click="open">打开消息提示</el-button>
        <el-button plain="true" @click="openVn">VNode</el-button>

        <h1>不可关闭的状态提示</h1>
        <el-button plain="true" @click="open1">消息</el-button>
        <el-button plain="true" @click="open2">成功</el-button>
        <el-button plain="true" @click="open3">警告</el-button>
        <el-button plain="true" @click="open4">错误</el-button>

        <h1>可关闭的状态提示</h1>
        <el-button plain="true" @click="open5">消息</el-button>
        <el-button plain="true" @click="open6">成功</el-button>
        <el-button plain="true" @click="open7">警告</el-button>
        <el-button plain="true" @click="open8">错误</el-button>

        <h1>文字居中</h1>
        <el-button plain="true" @click="open9">文字居中</el-button>

        <!--Options
        参数	说明	类型	可选值	默认值
        message	消息文字	string / VNode	—	—
        type	主题	string	success/warning/info/error	info
        iconClass	自定义图标的类名，会覆盖 type	string	—	—
        dangerouslyUseHTMLString	是否将 message 属性作为 HTML 片段处理	boolean	—	false
        customClass	自定义类名	string	—	—
        duration	显示时间, 毫秒。设为 0 则不会自动关闭	number	—	3000
        showClose	是否显示关闭按钮	boolean	—	false
        center	文字是否居中	boolean	—	false
        onClose	关闭时的回调函数, 参数为被关闭的 message 实例	function	—	—
        offset	Message 距离窗口顶部的偏移量	number	—	20-->
    </div>
</template>

<script>
    export default {
        name: "Message",
        methods: {
            open() {
                this.$message('这是一条消息提示');
            },

            openVn() {
                const h = this.$createElement;
                this.$message({
                    message: h('p', null, [
                        h('span', null, '内容可以是 '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ])
                });
            },
            open1() {
                /*this.$message({
                    message: '恭喜你，这是一条提示消息',
                    type: 'info'
                });*/
                this.$message.info('恭喜你，这是一条提示消息');
            },
            open2() {
                /*this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });*/
                this.$message.success('恭喜你，这是一条成功消息');
            },

            open3() {
                /*this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });*/
                this.$message.warning('警告哦，这是一条警告消息');
            },

            open4() {
                /*this.$message({
                    message: '恭喜你，这是一条错误消息',
                    type: 'error'
                });*/
                this.$message.error('恭喜你，这是一条错误消息');
            },

            open5() {
                this.$message({
                    message: '恭喜你，这是一条提示消息',
                    type: 'info',
                    showClose: true,
                });
            },
            open6() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success',
                    showClose: true,
                });
            },

            open7() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning',
                    showClose: true,
                });
            },

            open8() {
                this.$message({
                    message: '恭喜你，这是一条错误消息',
                    type: 'error',
                    showClose: true,
                });
            },

            open9() {
                this.$message({
                    message: '恭喜你，这是一条错误消息',
                    type: 'error',
                    showClose: true,
                    center: true,
                });
            },
        }
    }
</script>

<style scoped>

</style>
