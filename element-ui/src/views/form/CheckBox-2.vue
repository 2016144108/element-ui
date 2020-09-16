<template>
    <div class="checkbox-container">
        <!--多选按钮-->
        <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button name="d" label="复选框 A"></el-checkbox-button>
            <el-checkbox-button name="d"  label="复选框 B"></el-checkbox-button>
            <el-checkbox-button name="d"  label="复选框 C"></el-checkbox-button>
        </el-checkbox-group>


        <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox name="d" label="复选框 A" border></el-checkbox>
            <el-checkbox name="d"  label="复选框 B" border></el-checkbox>
            <el-checkbox name="d"  label="复选框 C" border></el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: "CheckBox-2",
        data(){
            return {
                checkboxGroup1:["复选框 A"],
            }
        }
    }
</script>

<style scoped>

</style>
