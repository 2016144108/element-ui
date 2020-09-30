<template>
    <div class="image-container">
        <div class="block" v-for="fit in fits" :key="fit">
            <span class="demonstration">{{ fit }}</span>
            <el-image
                    style="width: 100px; height: 100px"
                    :src="url"
                    :fit="fit"></el-image>
        </div>

        <div class="demo-image__error">
            <div class="block">
                <span class="demonstration">默认</span>
                <el-image style="width: 100px; height: 100px" src=""></el-image>
            </div>
            <div class="block">
                <span class="demonstration">图标</span>
                <el-image style="width: 100px; height: 100px" src="">
                    <div slot="error" class="image-slot" >
                        <i style="margin:0 auto;display: block" class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
            <div class="block">
                <span class="demonstration">图片</span>
                <el-image style="width: 100px; height: 100px" src="">
                    <div slot="error" class="image-slot" >
                        <img :src="errorpic"/>
                    </div>
                </el-image>
            </div>
        </div>

        <div class="demo-image__lazy" style="width: 200px;height: 200px;overflow: scroll" >
            <el-image v-for="url in urls" :key="url" :src="url" lazy style="width: 100%"></el-image>
        </div>

        <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :preview-src-list="list">
        </el-image>
    </div>
</template>

<script>
    export default {
        name: "Images",
        data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: require('../../assets/pic_5.jpg'),
                errorpic: require('../../assets/errorpic.png'),
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ],
                list:[require('../../assets/pic_5.jpg')],
            }
        }
    }
</script>

<style scoped>

</style>
