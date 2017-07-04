<template>
    <div class="footWrap clearfix">
        <ul>
            <li v-for="item in footTypes">
                <div><img :src="item.imgUrl" alt=""></div>
                <div>{{item.footType}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'footWrap',
        data() {
            return {
                footTypes: [
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg',
                        footType: '甜品饮品'
                    },
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg',
                        footType: '美食'
                    },
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg',
                        footType: '准时达'
                    },
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg',
                        footType: '新店优惠'
                    },
                    
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg',
                        footType: '鲜花蛋糕'
                    },
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg',
                        footType: '包子粥店'
                    },
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg',
                        footType: '商店便利'
                    },
                    {
                        imgUrl: 'https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg',
                        footType: '预定早餐'
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    .footWrap {
        font-size: 10px;
        background-color: #fff;
        border-bottom: 1px solid #e4e4e4;
    }
    .footWrap ul {
        width: 100%;
    }
    .footWrap ul li {
        float: left;
        width: 25%;
        margin: 5px 0;
    }
    .footWrap ul li img {
        display: block;
        width: 36px;
        height: 36px;
        margin: 0 auto;
        padding-bottom: 5px;
    }
</style>