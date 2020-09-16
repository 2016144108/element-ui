<template>
    <div class="radio-container">
        Radio Attributes
        参数	说明	类型	可选值	默认值
        value / v-model	绑定值	string / number / boolean	—	—
        label	Radio 的 value	string / number / boolean	—	—
        disabled	是否禁用	boolean	—	false
        border	是否显示边框	boolean	—	false
        size	Radio 的尺寸，仅在 border 为真时有效	string	medium / small / mini	—
        name	原生 name 属性	string	—	—

        Radio-group Attributes
        参数	说明	类型	可选值	默认值
        value / v-model	绑定值	string / number / boolean	—	—
        size	单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效	string	medium / small / mini	—
        disabled	是否禁用	boolean	—	false
        text-color	按钮形式的 Radio 激活时的文本颜色	string	—	#ffffff
        fill	按钮形式的 Radio 激活时的填充色和边框色	string	—	#409EFF

        Radio-button Attributes
        参数	说明	类型	可选值	默认值
        label	Radio 的 value	string / number	—	—
        disabled	是否禁用	boolean	—	false
        name	原生 name 属性	string	—	—
    </div>
</template>

<script>
    export default {
        name: "Radio-3"
    }
</script>

<style scoped>

</style>
