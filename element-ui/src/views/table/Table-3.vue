<template>
    <div class="table-container">
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    width="180"
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    label="操作"
                    fixed="right"
                    width="200">
                <template slot-scope="scope">
                    <el-button @click="handleWatch(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Table-3",
        data() {
            return {
                tableData: [{
                    id:1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id:2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id:3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id:4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    id:5,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id:6,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id:7,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id:8,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            handleWatch(row){
                this.$message({
                    message:   `你查看了id为${row.id}的数据`
                })
                console.log(row,row.id,row.date,row.name,row.address);
            },
            handleEdit(row){
                this.$message({
                    message: `成功编辑了id为${row.id}的信息`,
                    type: 'success',
                    showClose: false,
                })
            },
            handleDelete(row){
                this.$message({
                    message: `成功删除了id为${row.id}的数据`,
                    type: 'success',
                    showClose: false,
                })
            },
        },
    }
</script>

<style scoped>

</style>
