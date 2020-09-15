<template>
    <div class="line-container">
        <el-row>
            <el-link href="javascript:;">默认链接</el-link>
            <el-link href="javascript:;" type="primary">主要链接</el-link>
            <el-link href="javascript:;" type="success">成功链接</el-link>
            <el-link href="javascript:;" type="warning">警告链接</el-link>
            <el-link href="javascript:;" type="danger">危险链接</el-link>
            <el-link href="javascript:;" type="info">信息链接</el-link>
            <el-link href="javascript:;" type="warning" disabled>警告链接</el-link>
        </el-row>
        <el-row>
            <el-link href="javascript:;" type="primary" :underline="false">无下划线</el-link>
            <el-link href="javascript:;" type="primary" :underline="true">有下划线</el-link>
            <el-link href="javascript:;" type="primary">有下划线</el-link>
        </el-row>
        <el-row>
            <el-link icon="el-icon-edit">编辑</el-link>
            <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Line"
    }
</script>

<style scoped>

</style>
