<template>
	<div id="root">
		<div class="container">
			<div class="login-wrap">
				<div class="line">
					<img src="../../static/image/username.png">
					<input ref="inputUserName" v-model="username" type="text" name="text" placeholder="请输入用户名" @keyup.enter = "inputFlow()">
				</div>
				<div class="line">
					<img src="../../static/image/password.png">
					<input ref="inputPassword" v-model="password" type="password" name="text" placeholder="请输入密码" @keyup.enter = "inputFlow()">
				</div>	
				<div class="line">
					<div id="loginBtn" @click="runLogin()">登录</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	//import '../static/common/common.css'
	export default{
		data(){
			return{
				username: '',
				password: ''
			}
		},
		methods: {
			inputFlow: function(){
				if(this.username == ''){
					this.$refs['inputUserName'].focus();
				}else if(this.password == ''){
					this.$refs['inputPassword'].focus();
				}else{
					this.runLogin();
				}
			},
			runLogin: function(){
				var u = this.username;
				var p = this.password;
				var _this = this;
				this.$http.post('/login',{
					params: {
						username: u,
						password: p
					}
				}).then( msg => {
					let data = msg.data;
					if(data.code == 200 && data.data.password == this.password){
						window.localStorage.setItem("username",data.data.username);
						this.$router.push({path:'/publish'});
					}
				}).catch( err => {
					console.log(err);
				})
			}
		}
	}
</script>
<style scoped>
	.container{
		width: 1200px;
		margin: 0 auto;
		position: relative;
	}
	#root{
		background-image: url(../../static/image/loginBG.png);
		background-size: cover;
		background-repeat: no-repeat;
		height: 100%;
	}
	.login-wrap{
		width: 450px;
		height: 250px;
		background-color: white;
		border-radius: 10px;
		position: absolute;
		top: 100px;
		padding: 20px;
		box-sizing: border-box;
	}
	.line{
		margin: 20px 0;
		position: relative;
	}
	.line img{
		position: absolute;
		width: 26px;
		height: 26px;
		top: 6px;
		left: 10px;
	}
	.line input{
		height: 36px;
		line-height: 36px;
		width: 100%;
		padding-left: 46px;
		box-sizing: border-box;
		outline: none;
	}
	#loginBtn{
		width: 100%;
		text-align: center;
		padding: 10px 0;
		font-size: 16px;
		background-color: #E6A23C;
		margin: 0 auto;
		color: white;
		border-radius: 6px;
		cursor: pointer;
	}
</style>