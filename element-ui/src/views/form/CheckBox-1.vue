<template>
    <div class="checkbox-1">
        <el-checkbox v-model="checkList" name="a" label="复选框 A"></el-checkbox>
        <el-checkbox v-model="checkList" name="a" label="复选框 B"></el-checkbox>
        <el-checkbox v-model="checkList" name="a" label="复选框 C"></el-checkbox>

        <!--多选框组-->
        <el-checkbox-group v-model="checkList2">
            <el-checkbox name="b" label="复选框 A"></el-checkbox>
            <el-checkbox name="b"  label="复选框 B"></el-checkbox>
            <el-checkbox name="b"  label="复选框 C"></el-checkbox>
        </el-checkbox-group>

        <!--indeterminate 状态
        indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果-->
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

        <!--使用 min 和 max 属性能够限制可以被勾选的项目的数量。-->
        <el-checkbox-group v-model="checkList3"
                           :min="1"
                           :max="2">
            <el-checkbox name="d" label="复选框 A"></el-checkbox>
            <el-checkbox name="d"  label="复选框 B"></el-checkbox>
            <el-checkbox name="d"  label="复选框 C"></el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: "CheckBox-1",
        data () {
            return {
                checkList: ['复选框 B','复选框 A'],
                checkList2: ['复选框 C','复选框 A'],
                checkList3: ['复选框 C','复选框 A'],
                cities:["南通",'南京','常州','苏州','扬州'],
                checkedCities:["南通",'常州'],
                checkAll:false,
                isIndeterminate:true,
            };
        },
        methods:{
            handleCheckAllChange(val){
                console.log(val);
                this.checkedCities = val?this.cities:[];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value){
                console.log(value,"value",this.checkedCities,"checkedCities");
                this.checkAll = (this.checkedCities).length===(this.cities).length;
                this.isIndeterminate =(this.checkedCities).length>0 && (this.checkedCities).length<(this.cities).length;
            }
        }

    }
</script>

<style scoped>

</style>
