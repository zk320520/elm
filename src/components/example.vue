<template>
    <div class="example">
       <el-form ref="form" :model="form">
            <el-form-item label="用户名:">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            </el-form-item><el-form-item>
                <el-button type="primary" @click="onSubmit()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'example',
        data() {
            return {
                form : {
                    name: '',
                    password: ''
                } 
            }
        },   
        methods: {
            onSubmit: function() {
                let url = 'api/user';
                let name = this.name;
                axios.post(url, {
                    'name': this.form.name,
                    'password': this.form.password
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style>
    .example {

    }
</style>