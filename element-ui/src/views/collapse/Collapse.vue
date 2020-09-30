<template>
    <div class="collapse-container">
        <el-collapse style="width: 200px;padding: 0 20px">
            <el-collapse-item title="一致性 Consistency" name="1">
                <div><p>一致性 Consistency</p></div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
                <div><p>反馈 Feedback</p></div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
                <div><p>效率 Efficiencyy</p></div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
                <div><p>可控 Controllability</p></div>
            </el-collapse-item>
        </el-collapse>
        <br>
        <br>
        <!--accordion&#45;&#45;变成手风琴风格-->
        <el-collapse accordion style="width: 200px;padding: 0 20px">
            <el-collapse-item title="一致性 Consistency" name="1">
                <div><p>一致性 Consistency</p></div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
                <div><p>反馈 Feedback</p></div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
                <div><p>效率 Efficiencyy</p></div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
                <div><p>可控 Controllability</p></div>
            </el-collapse-item>
        </el-collapse>
        <br>
        <br>

        <el-collapse accordion style="width: 200px;padding: 0 20px">
            <el-collapse-item name="1">
                <template slot="title">
                    <i class="header-icon el-icon-finished"></i>一致性 Consistency
                </template>
                <div><p>一致性 Consistency</p></div>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    <i class="header-icon el-icon-chat-line-round"></i>反馈 Feedback
                </template>
                <div><p>反馈 Feedback</p></div>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title">
                    <i class="header-icon el-icon-position"></i>效率 Efficiencyy
                </template>
                <div><p>效率 Efficiencyy</p></div>
            </el-collapse-item>
            <el-collapse-item name="4">
                <template slot="title">
                    <i class="header-icon el-icon-setting"></i>可控 Controllability
                </template>
                <div><p>可控 Controllability</p></div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "Collapse"
    }
</script>

<style scoped lang="scss">
</style>
