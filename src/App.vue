<template>
  	<div id="app">
		<div class="main">
			<router-view></router-view>
		</div>
  	</div>
</template>

<script>
	import '@/css/common.css';
	export default {
		name: 'app',
		components: {
			
		}
	}
</script>

<style> 
	#app {
  		font-family: 'Avenir', Helvetica, Arial, sans-serif;
  		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
