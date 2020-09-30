<template>
    <div class="avatar-container">
        <!--通过 shape 和 size 设置头像的形状和大小。
        shape&#45;&#45;square,circle
        size&#45;&#45;large,medium,small-->
        <el-avatar shape="square" :src="imgurl" style="margin-right: 10px"></el-avatar>
        <el-avatar shape="circle" :src="imgurl" style="margin-right: 10px"></el-avatar>

        <el-avatar icon="el-icon-cold-drink"  style="margin-right: 10px"></el-avatar>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"  style="margin-right: 10px"></el-avatar>
        <el-avatar  style="margin-right: 10px"> 葛杨 </el-avatar>
        <br>
        <el-avatar :size="60" :src="imgurl+'d'" @error="errorHandler">
            <i class="el-icon-picture-outline"></i>
        </el-avatar>
        <el-avatar :size="60" :src="imgurl+'d'" @error="errorHandler">
            <img src="../../assets/errorpic.png"/>
        </el-avatar>
        <el-avatar :size="60" :src="imgurl+'d'" @error="errorHandler">
            <p>图片错误</p>
        </el-avatar>
        <br>
        <div class="block" v-for="fit in fits" :key="fit">
            <span class="title">{{ fit }}</span>
            <el-avatar shape="square" :size="120" :fit="fit" :src="imgurl"></el-avatar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        data(){
            return{
                imgurl: require("../../assets/pic_5.jpg"),
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            }
        },
        methods: {
            errorHandler() {
                return true
            }
        }
    }
</script>

<style scoped>

</style>
