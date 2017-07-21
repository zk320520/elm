<template>
    <div class="discover">
        <div class="header">
            <div class="left">
                <em></em>
            </div> 
            <h2>发现</h2> 
        </div>
        <div class="content clearfix">   
            <a href="#"> 
                <p class="title">积分商城</p>
                <p class="tip">0元好物在这里！</p>
                <img src="//fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
            </a>
            <a href="#"> 
                <p class="title">美味爆料</p>
                <p class="tip">冰爽美食吃吃吃</p>
                <img src="//fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" alt="">
            </a>
            <a href="#"> 
                <p class="title">推荐有奖</p>
                <p class="tip">5元现金拿不停</p>
                <img src="//fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'discover',
        data() {
            return {

            };
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .discover {

    }
    .discover .header {
        width: 100%;
        height: 38px;
        color: #fff;
        background-image: -webkit-linear-gradient(left, #0af, #0085ff);
        background-image: linear-gradient(90deg, #0af, #0085ff);
        position: sticky;
        top: 0;
    }
    .discover .header .left {
        width: 38px;
        height: 38px;
    }
    .discover .header .left em {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        transform: rotate(-45deg);
        vertical-align: -10px;
        margin-left: 15px;
    }
    .discover .header h2 {
        font-size: 16px;
        line-height: 38px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .discover .content a {
        float: left;
        width: 50%;
        height: 80px;
        background-color: #fff;
    }
    .discover .content a .title {
        font-size: 14px;
    }
    .discover .content a .tip {
        font-size: 10px;
    }
    .discover .content a img {
        float: right;
        width: 40px;
        height: 40px;
    }
    .discover .content a:first-child {
        height: 160px;
    }
    .discover .content a:first-child .title {
        margin: 10px;
    }
    .discover .content a:first-child .tip {
        margin: 0 10px;
    }
    .discover .content a:first-child img {
        width: 65px;
        height: 65px;
        margin: 10px auto;
    }
</style>