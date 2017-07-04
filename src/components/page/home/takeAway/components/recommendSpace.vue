<template>
    <div class="recommendSpace">
        <ul class="clearfix">
            <li v-for="item in recommendList">
                <div class="desc">
                    <p class="title">{{ item.title }}</p>
                    <p>{{ item.desc }}</p>
                </div>
                <div class="img">
                    <img :src="item.imgUrl" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'recommendSpace', 
        data() {
            return {
                recommendList: [
                    {
                        title: '天天特价',
                        desc: '美食一折起',
                        imgUrl: '//img3.imgtn.bdimg.com/it/u=3469887173,4062470989&fm=214&gp=0.jpg'
                    },
                    {
                        title: '霸王餐',
                        desc: '领20元红包',
                        imgUrl: '//img3.imgtn.bdimg.com/it/u=3469887173,4062470989&fm=214&gp=0.jpg'
                    },
                    {
                        title: '营养快餐',
                        desc: '15元吃饱',
                        imgUrl: '//img3.imgtn.bdimg.com/it/u=3469887173,4062470989&fm=214&gp=0.jpg'
                    },
                    {
                        title: '5折添活力',
                        desc: '上班不疲倦',
                        imgUrl: '//img3.imgtn.bdimg.com/it/u=3469887173,4062470989&fm=214&gp=0.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .recommendSpace ul li {
        float: left;
        width: 50%;
        text-align: left;
        background-color: #fff;
        border-left: 3px solid #eee;
        border-bottom: 3px solid #eee; 
        margin-left: -3px;          
    }

    .recommendSpace ul li .desc {
        float: left;
        margin: 10px;
    }
    .recommendSpace ul li .desc p {
        margin-top: 4px;
        font-size: 12px;
    }
    .recommendSpace ul li .desc .title {
        font-size: 14px;
    }
    .recommendSpace ul li .img {
        float: right;
        width: 50px;
        height: 50px;
        margin: 10px;
    }
    .recommendSpace ul li .img img {
        width: 50px;
        height: 50px;
    }
</style>