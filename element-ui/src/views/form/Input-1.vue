<template>
<div class="input-container">

    <h1>基础用法</h1>
    <el-input style="width: 400px" v-model="input1" placeholder="请输入内容"></el-input>


    <h1>可清空输入框</h1>
    <!--clearable-->
    <el-input style="width: 400px" placeholder="请输入内容" v-model="input2" clearable></el-input>


    <h1>密码框</h1>
    <!--show-password-->
    <el-input style="width: 400px" placeholder="请输入密码" v-model="input3" show-password></el-input>
    <br>
    <el-input type="password" style="width: 400px" placeholder="请输入密码" v-model="input3"></el-input>


    <h1>带 icon 的输入框</h1>
    <!--suffix后
    prefix前-->
    <!--属性方法-->
    <el-input style="width: 400px" placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input4"></el-input>
    <br>
    <el-input style="width: 400px" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input5"></el-input>
    <br>
    <!--slot 方式：-->
    <el-input style="width: 400px"  placeholder="请选择日期" v-model="input6">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
    </el-input>
    <br>
    <el-input style="width: 400px"  placeholder="请输入内容" v-model="input7">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>

    <h1>文本框</h1>
    <el-input style="width: 200px"
            type="textarea"
            :rows="2"
              :autosize="{ minRows: 2}"
            placeholder="请输入内容"
              resize="none"
            v-model="input8">
    </el-input>
</div>
</template>

<script>
    export default {
        name: "Input-1",
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
                input8: '',
            }
        }
    }
</script>

<style scoped>

</style>
