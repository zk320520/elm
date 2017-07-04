<template>
    <div class="searchBar">
        <div class="location">
            <span class="iconfont icon-31dingwei"></span>
            <span>{{ location }}</span>
        </div>
        <div class="searchInput">
            <a href="#">
                <input type="text" placeholder="搜索商家、商品">
            </a>
        </div>
        <div class="searchHistory">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'searchBar',
        data() {
            return {
                location: '苏州市工业园区裕新路188号同程大厦'
            }
        }
    }
</script>

<style scoped>
    .searchBar {
        padding: 10px 12px;
        color: #fff;
        height: 80px;
        background-image: -webkit-linear-gradient(left, #0af, #0085ff);
        background-image: linear-gradient(90deg, #0af, #0085ff);
        position: sticky;
        top: 0;
    }
    .searchBar .location {
        height: 30px;
        text-align: left;
        line-height: 30px;
    }
    .searchBar .searchInput input {
        display: block;
        margin: 10px 0;
        width: 100%;
        height: 30px;
        color: #333;
        font-size: 14px;
        text-align: center;
        border-radius: 30px;  
        border: none;
        outline: none;      
    }
</style>