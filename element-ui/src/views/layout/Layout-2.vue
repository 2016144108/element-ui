<template>
    <div class="layout-container">
        <!--参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs微笑、sm小型、md中等、lg大型 和 xl超大。-->
        <el-row :gutter="10">
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="4" :lg="3" :xl="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Layout-2"
    }
</script>

<style scoped>
    .el-col {
        border-radius: 4px;
        margin-bottom: 20px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
