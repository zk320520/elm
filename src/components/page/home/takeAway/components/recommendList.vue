<template>
    <div class="recommendlist">
        <ul>
            <li class="clearfix" v-for="(item, index) in recommendlist" track-by="index">
                <div class="logo">
                    <img :src="item.logourl" alt="">
                </div>
                <div class="main">
                    <div class="line">
                        <h3 class="shopname">{{ item.shopname }}</h3>
                    </div>
                    <div class="line">
                        <div class="ratewrap">
                            <span class="rate">{{ item.rate }}</span>
                            <span>月售{{ item.salecount }}单</span>
                        </div>
                    </div>
                    <div class="line clearfix">
                        <div class="moneylimit">
                            <span>¥{{ item.limitmoney }}起送</span> 
                            <span>配送费¥{{ item.sendmoney }}</span>
                            <span>¥{{ item.avagage }}/人</span>
                        </div>
                        <div class="timedistanceWrap">
                            <span class="distanceWrap">{{ item.distance }}m</span> 
                            <span class="timeWrap">{{ item.costtime }}分钟</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'recommendList',
        data() {
            return {
                recommendlist: [
                    {
                        logourl: '//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
                        shopname: '肯德基宅急送（漕东店）',
                        rate: '4.8',
                        salecount: '1467',
                        limitmoney: '0',
                        sendmoney: '9',
                        avagage: '48',
                        distance: '710',
                        costtime: '40' 
                    },
                    {
                        logourl: '//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
                        shopname: '肯德基宅急送（漕东店）',
                        rate: '4.8',
                        salecount: '1467',
                        limitmoney: '0',
                        sendmoney: '9',
                        avagage: '48',
                        distance: '710',
                        costtime: '40' 
                    },
                    {
                        logourl: '//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
                        shopname: '肯德基宅急送（漕东店）',
                        rate: '4.8',
                        salecount: '1467',
                        limitmoney: '0',
                        sendmoney: '9',
                        avagage: '48',
                        distance: '710',
                        costtime: '40' 
                    },
                    {
                        logourl: '//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
                        shopname: '肯德基宅急送（漕东店）',
                        rate: '4.8',
                        salecount: '1467',
                        limitmoney: '0',
                        sendmoney: '9',
                        avagage: '48',
                        distance: '710',
                        costtime: '40' 
                    },
                    {
                        logourl: '//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
                        shopname: '肯德基宅急送（漕东店）',
                        rate: '4.8',
                        salecount: '1467',
                        limitmoney: '0',
                        sendmoney: '9',
                        avagage: '48',
                        distance: '710',
                        costtime: '40' 
                    },
                    {
                        logourl: '//fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/',
                        shopname: '肯德基宅急送（漕东店）',
                        rate: '4.8',
                        salecount: '1467',
                        limitmoney: '0',
                        sendmoney: '9',
                        avagage: '48',
                        distance: '710',
                        costtime: '40' 
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .recommendlist {
        background-color: #fff;
        border-top: 1px solid #eee;
    }
    .recommendlist li {
        color: #666;
        font-size: 12px;
        padding: 10px;        
        border-bottom: 1px solid #eee;
    }
    .recommendlist li .logo {
        float: left;
        width: 20%;  
    }
    .recommendlist li .logo img {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 2px;
    }
    .recommendlist li .main {
        float: left;        
        width: 80%;
    }
    .recommendlist li .main .shopname {
        height: 16px;
        line-height: 16px;
        color: #333;
        font-weight: 700;
        font-size: 12px;
    }
    .recommendlist li .main .ratewrap {
        margin-top: 3px;
        color: #666;
        font-size: 10px;
    }
    .recommendlist li .main .rate {
        margin: 0 2px;
        color: #ff6000;
    }
    .recommendlist li .main .moneylimit {
        float: left;
        margin-top: 3px;
        color: #666;
        font-size: 10px;
    }
    .recommendlist li .main .moneylimit span {
        margin-right: 2px;
    }
    .recommendlist li .main .timedistanceWrap {
        float: right;
        margin-top: 3px;
        color: #666;
        font-size: 10px;
    }
    .recommendlist li .main .timedistanceWrap .timeWrap {
        color: #2395ff;
    }
</style>