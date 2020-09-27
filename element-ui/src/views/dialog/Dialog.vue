<template>
    <div class="dialog-container">

        <!--需要设置visible属性，它接收Boolean，当为true时显示 Dialog。
        Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。-->
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" label-width="100px">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
        <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
            <el-dialog
                    width="30%"
                    title="内层 Dialog"
                    :visible.sync="innerVisible"
                    append-to-body>
            </el-dialog>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        data() {
            return {
                form:{
                    name:"",
                },
                dialogVisible: false,
                dialogFormVisible: false,
                outerVisible: false,
                innerVisible: false,
            };
        },

    }
</script>

<style scoped>

</style>
