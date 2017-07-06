<template>
    <div class="takeAway">
        <searchBar></searchBar>
        <footWrap></footWrap>
        <advertisingSpace></advertisingSpace>
        <recommendSpace></recommendSpace>
        <h3 class="recommend-title">推荐商家</h3>
        <recommendList></recommendList>
    </div>
</template>

<script>
    import searchBar from './components/searchBar';
    import footWrap from './components/footWrap';
    import advertisingSpace from './components/advertisingSpace';
    import recommendSpace from './components/recommendSpace';
    import recommendList from './components/recommendList';
    export default {
        name: 'takeAway',
        components: {
            searchBar,
            footWrap,
            advertisingSpace,
            recommendSpace,
            recommendList
        }
    }
</script>

<style scoped>
    .takeAway {
        margin-bottom: 50px;
    }
    .takeAway .recommend-title {
        font-size: 14px;
        font-weight: 600;
        line-height: 30px;
        padding-left: 10px;
        margin-top: 10px;
        background-color: #fff;
        border-top: 1px solid #eee;
    }
</style>