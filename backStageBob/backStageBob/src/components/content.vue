<template>
	<div id="root" class="container">
		<div class="articleZone">
			<h2 style="text-align: center;">{{title}}</h2>
			<div class="author">作者：天牛</div>
			<div v-html="article" class="contentZone"></div>
			<div class="createAt">创建于：{{createTime}}</div>
			<div v-if="page_type == 'admin'">
				<el-button type="primary" icon="el-icon-edit" @click="editContent()">编辑</el-button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	//import '../static/common/common.css'
	export default{
		data(){
			return{
				article: '',
				title: '',
				createTime: '',
				page_type: 'user',
				article_id: ''
			}
		},
		methods: {
			editContent: function(){
				console.log(this.article_id);
				var _this = this;
				this.$router.push({
					path: '/publish',
					query: {
						id: _this.article_id,
						type: 'admin'
					}
				})
			}
		},
		mounted(){
			if(this.$route.params && this.$route.params.id){
				this.article_id = this.$route.params.id,
				this.page_type = this.$route.params.type == 'admin' ? 'admin' : 'user'
			}
			this.$http.get('/article/content',{
				params: {
					id: this.article_id
				}
			}).then((msg) => {
			this.title = msg.data.data.title;
	        this.article = msg.data.data.content;
	        this.createTime = msg.data.data.createdAt.substr(0,10);
	      }).catch(function(err){
	        console.log(err);
	      })
		}
	}
</script>
<style scoped>
	.container{
		width: 1200px;
		margin: 0 auto;
	}
	.articleZone{
		width: 1200px;
		min-height: 300px;
		margin: 0 auto;
		padding: 10px;
		box-sizing: border-box;
	}
	.createAt,.author{
		color: #ccc;
		font-size: 14px;
		margin: 8px 0;
		text-align: right;
	}
	.author{
		text-align: left;
		color: #333;
	}
</style>