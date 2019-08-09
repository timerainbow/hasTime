<template>
	<div id="root">
		<li v-for="(item,index) in items">
			<router-link :to="{ name: 'content', params: { id: item.id,type: 'admin' }}">{{ index+1 }}:{{item.title}}</router-link>
		</li>
	</div>
</template>
<script type="text/javascript">
	//import '../static/common/common.css'
	export default{
		data(){
			return{
				items: []
			}
		},
		mounted(){
			this.$http.get('/article/init').then( msg => {
				if(msg.data.code == 200){
					this.items = [];
					var data = msg.data.data;
					for(let i=0;i<data.length;i++){
						var item = {
							id: data[i].id,
							title: data[i].title
						}
						this.items.push(item);
					}
				}
			}).catch(err=>{
				console.log(err);
			})
		}
	}
</script>
<style scoped>
	a{
		text-decoration: none;
		color: #333;
	}
	li{
		list-style: none;
		text-align: left;
		line-height: 32px;
		font-size: 16px;
	}
</style>