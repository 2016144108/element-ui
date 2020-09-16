<template>
    <div class="radio-container">
        <!--单选框-->
        <!--注意值是label 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值-->
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-radio v-model="radio" label="3">备选项</el-radio>

        <!--单选框组-->
        <el-radio-group v-model="max">
            <el-radio label='1'>备选项</el-radio>
            <el-radio label='2'>备选项</el-radio>
            <el-radio label='3'>备选项</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: "Radio-1",
        data () {
            return {
                radio: '1',
                max:'1',
                min:'1',
            };
        }
    }
</script>

<style scoped>

</style>
