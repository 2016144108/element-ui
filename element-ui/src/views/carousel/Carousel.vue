<template>
    <div class="carousel-container">
        <el-carousel :autoplay="false" :interval="1000" trigger="hover" indicator-position="" arrow="hover"  height="420px">
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner1.jpg" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner2.jpg" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner3.png" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>

        <el-carousel   direction="vertical" :interval="1000" trigger="hover" indicator-position="" arrow="hover"  height="420px">
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner1.jpg" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner2.jpg" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner3.png" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>

        <el-carousel :interval="1000" type="card" trigger="hover" indicator-position="" arrow="hover"  height="420px">
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner1.jpg" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner2.jpg" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div style="width: 100%" class="img-box">
                    <img style="width: 100%" src="../../assets/mediabanner3.png" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>


        <!--Carousel Attributes
        参数	说明	类型	可选值	默认值
        height	走马灯的高度	string	—	—
        initial-index	初始状态激活的幻灯片的索引，从 0 开始	number	—	0
        trigger	指示器的触发方式	string	click	—
        autoplay	是否自动切换	boolean	—	true
        interval	自动切换的时间间隔，单位为毫秒	number	—	3000
        indicator-position	指示器的位置	string	outside/none	—
        arrow	切换箭头的显示时机	string	always/hover/never	hover
        type	走马灯的类型	string	card	—
        loop	是否循环显示	boolean	-	true
        direction	走马灯展示的方向	string	horizontal/vertical	horizontal-->

    </div>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped lang="scss">
    .carousel-container{
        width: 100%;

        .el-carousel{
            width: 800px;
            margin: 0 auto;

            .el-carousel-item{
                width: 400px;            }
        }
    }
</style>
