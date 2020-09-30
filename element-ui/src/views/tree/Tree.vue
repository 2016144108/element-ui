<template>
    <div class="tree-container">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
    export default {
        name: "Tree",
        data() {
            return {
                data: [
                    {
                        label:"角色管理",
                        children:[
                            {
                                label: "管理员管理",
                                children: [
                                    {
                                        label: "查看",
                                    },
                                    {
                                        label: "编辑",
                                    },
                                ],
                            },
                            {
                                label:"用户管理",
                                children:[
                                    {
                                        label:"查看",
                                    },
                                    {
                                        label:"编辑",
                                    },
                                    {
                                        label:"新增",
                                    },
                                    {
                                        label:"删除",
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        label:'商品管理',
                        children:[
                            {
                                label:'全部商品',
                                children:[
                                    {
                                        label:'查看',
                                    },
                                    {
                                        label:'编辑',
                                    },
                                    {
                                        label:'新增',
                                    },
                                    {
                                        label:'删除',
                                    },
                                    {
                                        label:'新增',
                                    },
                                ],
                            },
                            {
                                label:'待审核商品',
                                children:[
                                    {
                                        label:'审核',
                                    },
                                    {
                                        label:'查看',
                                    },
                                    {
                                        label:'删除',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label:'订单管理',
                        children:[
                            {
                                label:'全部订单',
                                children:[
                                    {
                                        label:'查看',
                                    },
                                    {
                                        label:'删除',
                                    },
                                ]
                            },
                            {
                                label:'待审核订单',
                                children:[
                                    {
                                        label:'审核',
                                    },
                                    {
                                        label:'查看',
                                    },
                                    {
                                        label:'删除',
                                    },
                                ]
                            },
                            {
                                label:'进行中订单',
                                children:[
                                    {
                                        label:'编辑',
                                    },
                                    {
                                        label:'查看',
                                    },
                                    {
                                        label:'删除',
                                    },
                                ]
                            },
                            {
                                label:'已完成订单',
                                children:[
                                    {
                                        label:'查看',
                                    },
                                    {
                                        label:'删除',
                                    },
                                ]
                            },
                            {
                                label:'已拒绝订单',
                                children:[
                                    {
                                        label:'查看',
                                    },
                                    {
                                        label:'删除',
                                    },
                                ]
                            },
                        ]
                    },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        },
    }
</script>

<style scoped>

</style>
