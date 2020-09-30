<template>
    <div class="message-container">
        <el-button type="text" @click="open1">点击打开 Message Box</el-button>
        <br>
        <el-button type="text" @click="open2">删除数据</el-button>
        <br>
        <el-button type="text" @click="open3">请提交你的邮箱</el-button>
        <br>
        <el-button type="text" @click="open4">关闭与取消</el-button>
        <br>
        <el-button type="text" @click="open5">通知是居中的</el-button>
    </div>
</template>

<script>
    export default {
        name: "MessageBox",
        methods:{

            /*调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。
            此例中接收了两个参数，message和title。
            值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。
            若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。*/
            open1() {
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: action==='cancel'?"取消了":'知道了'
                        });
                    }
                });
            },

            /*调用$confirm方法即可打开消息提示，它模拟了系统的 confirm。
            Message Box 组件也拥有极高的定制性，我们可以传入options作为第三个参数，它是一个字面量对象。
            type字段表明消息类型，可以为success，error，info和warning，无效的设置将会被忽略。
            注意，第二个参数title必须定义为String类型，如果是Object，会被理解为options。在这里我们用了 Promise 来处理后续响应。*/
            open2() {
                this.$confirm('你确定输出这份数据吗？', '删除', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            /*调用$prompt方法即可打开消息提示，它模拟了系统的 prompt。
            可以用inputPattern字段自己规定匹配模式，或者用inputValidator规定校验函数，
            可以返回Boolean或String，返回false或字符串时均表示校验未通过，同时返回的字符串相当于定义了inputErrorMessage字段。
            此外，可以用inputPlaceholder字段来定义输入框的占位符。*/
            open3() {
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },

            /*默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，
            Promise 的 reject 回调和callback回调的参数均为 'cancel'。
            如果将distinguishCancelAndClose属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。*/
            open4() {
                this.$confirm('提示', '你好嘢', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '你好嘢',
                    });
                }).catch((action) => {
                    this.$message({
                        type: 'info',
                        message: action==='cancel'?"拒绝和你打招呼":"不理你"
                    });
                });
            },

            open5() {
                this.$confirm('提示', '你好嘢', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center:true,
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '你好嘢',
                    });
                }).catch((action) => {
                    this.$message({
                        type: 'info',
                        message: action==='cancel'?"拒绝和你打招呼":"不理你"
                    });
                });
            },
        }
    }
</script>

<style scoped>

</style>
