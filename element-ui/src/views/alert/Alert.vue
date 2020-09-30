<template>
    <div class="alert-container">
        <!--effect&#45;&#45;主体，默认light-->
        <div>
            <el-alert
                    title="成功提示的文案"
                    type="success"
                    effect="light">
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info"
                    effect="light">
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning"
                    effect="light">
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error"
                    effect="light">
            </el-alert>
        </div>

        <div>
            <el-alert
                    title="成功提示的文案"
                    type="success"
                    effect="dark">
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info"
                    effect="dark">
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning"
                    effect="dark">
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error"
                    effect="dark">
            </el-alert>
        </div>

        <div>
            <el-alert
                    title="此警告不能关闭"
                    type="success"
                    effect="light"
                    :closable="false">
            </el-alert>
            <el-alert
                    title="此警告关闭图标改变"
                    type="success"
                    effect="light"
                    close-text="知道了">
            </el-alert>
            <el-alert
                    title="这里有回溯方法"
                    type="success"
                    effect="light"
                    @close="close">
            </el-alert>
        </div>


        <!--show-icon开启图标展示-->
        <div>
            <el-alert
                    title="成功提示的文案"
                    type="success"
                    effect="dark"
                    show-icon>
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info"
                    effect="dark"
                    show-icon>
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning"
                    effect="dark"
                    show-icon>
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error"
                    effect="dark"
                    show-icon>
            </el-alert>
        </div>


        <!--center是文字居中-->
        <div>
            <el-alert
                    title="成功提示的文案"
                    type="success"
                    effect="dark"
                    show-icon
                    center>
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info"
                    effect="dark"
                    show-icon
                    center>
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning"
                    effect="dark"
                    show-icon
                    center>
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error"
                    effect="dark"
                    show-icon
                    center>
            </el-alert>
        </div>

        <!--description添加辅助文字-->
        <div>
            <el-alert
                    title="成功提示的文案"
                    type="success"
                    effect="dark"
                    show-icon
                    center
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info"
                    effect="dark"
                    show-icon
                    center
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning"
                    effect="dark"
                    show-icon
                    center
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error"
                    effect="dark"
                    show-icon
                    center
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </el-alert>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Alert",
        methods:{
            close(){
                console.log('关闭了');
            },
        }
    }
</script>

<style scoped>

</style>
