<template>
    <div class="discover">
        <div class="header">
            <div class="left">
                <em></em>
            </div> 
            <h2 class="title">发现</h2> 
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
    .discover .header .title {
        font-size: 16px;
        line-height: 38px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
</style>