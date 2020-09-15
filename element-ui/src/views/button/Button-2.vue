<template>
    <div class="button-container">
        <!--disabled-->
        <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>

        <el-row>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text" disabled>文字按钮</el-button>
        </el-row>

        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>

        <!--el-button-group-->
        <el-button-group>
            <el-button type="info" icon="el-icon-edit"></el-button>
            <el-button type="info" icon="el-icon-share"></el-button>
            <el-button type="info" icon="el-icon-delete"></el-button>
        </el-button-group>

        <el-col>
            <el-button :loading="true">加载中</el-button>
            <el-button type="primary" :loading="true">加载中</el-button>
            <el-button type="success" :loading="true">加载中</el-button>
            <el-button type="info" :loading="true">加载中</el-button>
            <el-button type="warning" :loading="true">加载中</el-button>
            <el-button type="danger" :loading="true">加载中</el-button>
        </el-col>

        <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium" round>中等按钮</el-button>
            <el-button size="small" round>小型按钮</el-button>
            <el-button size="mini" round>超小按钮</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Button-2"
    }
</script>

<style scoped>

</style>
