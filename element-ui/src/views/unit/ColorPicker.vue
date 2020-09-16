<template>
    <div class="color-container">
        <div class="block">
            <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
            <span class="demonstration">无默认值</span>
            <el-color-picker v-model="color2"></el-color-picker>
        </div>

        <!--show-alpha开启透明度选择-->
        <div class="block">
            <el-color-picker v-model="color" show-alpha></el-color-picker>
        </div>

        <!--predefine开启颜色预设-->
        <div class="block">
            <el-color-picker
                    v-model="color3"
                    show-alpha
                    :predefine="predefineColors"
                    @change="change" @active-change="active">
            </el-color-picker>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ColorPicker",
        data(){
            return {
                color1:"#FF6302",
                color2:null,
                color:"#ff616e",
                color3:"#aaaaaa",
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ],
            }
        },
        methods:{
            change(val){
                console.log('最终选择了'+val);
            },
            active(val){
                console.log('移动到了'+val);
            },
        }
    }
</script>

<style scoped>

</style>
