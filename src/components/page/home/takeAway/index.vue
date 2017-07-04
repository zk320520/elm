<template>
    <div class="takeAway">
        <searchBar></searchBar>
        <footWrap></footWrap>
        <advertisingSpace></advertisingSpace>
        <recommendSpace></recommendSpace>
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

<style>

</style>