<template>
    <div class="layout-container">
        <!--一行以24列为主，:span占了多少列-->
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <!--:gutter表示每列之间的间隔-->
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>


        <!--通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。-->
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <!--将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start头对齐, center居中对齐, end尾对齐, space-between空格在中间, space-around空格在周围 其中的值来定义子元素的排版方式。-->
        <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg"  justify="start">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg"  justify="center">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg"  justify="end">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg"  justify="space-between">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg"  justify="space-around ">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped lang="scss">
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
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
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
