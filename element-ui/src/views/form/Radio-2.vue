<template>
    <div class="radio-container">
        <!--单选按钮el-radio-button-->
        <el-radio-group v-model="radio1">
            <el-radio-button name="a" label="上海"></el-radio-button>
            <el-radio-button name="a" label="北京"></el-radio-button>
            <el-radio-button name="a" label="广州"></el-radio-button>
            <el-radio-button name="a" label="深圳"></el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="radio2"  size="medium">
            <el-radio-button name="b" label="上海"></el-radio-button>
            <el-radio-button name="b" label="北京"></el-radio-button>
            <el-radio-button name="b" label="广州"></el-radio-button>
            <el-radio-button name="b" label="深圳"></el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="radio3" disabled >
            <el-radio-button name="c" label="上海"></el-radio-button>
            <el-radio-button name="c"  label="北京"></el-radio-button>
            <el-radio-button name="c"  label="广州"></el-radio-button>
            <el-radio-button name="c"  label="深圳"></el-radio-button>
        </el-radio-group>

        <el-radio-group v-model="radio4">
            <el-radio name="d" label="上海" border></el-radio>
            <el-radio name="d" label="北京" border></el-radio>
            <el-radio name="d" label="广州" border></el-radio>
            <el-radio name="d" label="深圳" border></el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: "Radio-2",
        data(){
            return {
                radio1:"上海",
                radio2:"上海",
                radio3:"上海",
                radio4:"上海",
            }
        }
    }
</script>

<style scoped>

</style>
