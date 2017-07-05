<template>
    <div class="home">
        <router-view></router-view>
        <div id="nav">
            <ul>
                <li>
                    <router-link to="/">
                        <div class="iconfont icon-hanbao"></div>
                        <div>外卖</div>      
                    </router-link>
                </li>
                <li>
                    <router-link to="/list">
                        <div class="iconfont icon-sousuo"></div>
                        <div>发现</div>      
                    </router-link>
                </li>
                <li>
                    <router-link to="/order">
                        <div class="iconfont icon-quanbudingdan"></div>
                        <div>订单</div>      
                    </router-link>
                </li>
                <li>
                    <router-link to="/user">
                        <div class="iconfont icon-mine"></div>
                        <div>我的</div>      
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'index',
        components: {

        }
    }
</script>

<style scoped>
    #nav {
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #fff;
    }
    #nav ul {
        display: flex;
    }
    #nav ul li {
        flex: 1;
		font-size: 10px;
		line-height: 1.2;
    }
	#nav ul li .iconfont {
		font-size: 20px;
		
	}
	#nav ul li .router-link-exact-active {
		color: #3190e8;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity 5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
</style>