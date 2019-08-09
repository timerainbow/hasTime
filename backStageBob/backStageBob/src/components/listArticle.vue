<template>
	<div id="root" class="container">
		<li v-for="(item,index) in items">
			<router-link :to="{ name: 'content', params: { id: item.id }}">{{ index+1 }}:{{item.title}}</router-link>
		</li>
	</div>
</template>
<script type="text/javascript">
	import '../../static/common/common.css'
	import Bus from '../bus'
	export default{
		data(){
			return{
				items:[{title: '无搜索结果'}]
			}
		},
		mounted(){
			var params_title = this.$route.query.title;
			this.$http.get('/article/search',
				{
					params:{
						title: params_title
					}
				}
			).then(msg =>{
				var data = msg.data.data;
				console.log(data)
				if(data.length > 0){
					this.items = [];
					for(let i=0;i<data.length;i++){
						this.items.push({
							id: data[i].id,
							title: data[i].title
						})
					}
				}else{
					this.items = [];
					this.items.push({
						title: '无搜索结果'
					})
				}
			}).catch(err=>{
				console.log(err);
			})

			Bus.$on('searchResult', msg => {
				this.$http.get('/article/search',
					{
						params:{
							title: msg
						}
					}
				).then(msg =>{
					var data = msg.data.data;
					if(data.length > 0){	
						this.items = [];
						for(let i=0;i<data.length;i++){
							this.items.push({
								id: data[i].id,
								title: data[i].title
							})
						}
					}else{
						this.items = [];
						this.items.push({
							title: '无搜索结果'
						})
					}
				}).catch(err=>{
					console.log(err);
				})
			})
		}
	}
</script>
<style scoped>
	.container{
		width: 1200px;
		margin: 0 auto;
	}
	/*#root{
		margin-top: 30px;
	}*/
	a{
		text-decoration: none;
		color: #333;
	}
	li{
		list-style: none;
		text-align: left;
		line-height: 36px;
		font-size: 20px;
	}
</style>