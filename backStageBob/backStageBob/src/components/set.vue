<template>
	<div id="root">
		<div class="line">
	      <el-input type="password" placeholder="请输入密码" v-model="originCode">
	        <template slot="prepend">原密码：</template>
	      </el-input>
	    </div>
	    <div class="line">
	      <el-input type="password" placeholder="新密码" v-model="newCode">
	        <template slot="prepend">新密码：</template>
	      </el-input>
	    </div>
	    <div class="line">
	      <el-input type="password" placeholder="再次确认新密码" v-model="reNewCode">
	        <template slot="prepend">再次输入新密码：</template>
	      </el-input>
	    </div>
	    <div class="line">
			<el-button type="primary" icon="el-icon-edit" @click="submit()">提交</el-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	//import '../static/common/common.css'
	export default{
		data(){
			return{
				originCode: '',
				newCode: '',
				reNewCode: ''
			}
		},
		methods: {
			submit: function(){
				if(this.newCode == '' || this.reNewCode == '' || this.originCode == ''){
					this.$message.error('请填入相关信息！');
					return;
				}
				if(this.newCode != this.reNewCode){
					is.$message.error('两次输入的密码不正确！');
					return;
				}
				this.$http.post('/updatePssword',{
					params: {
						originPassword: this.originCode,
						newPassword: this.newCode,
						username: window.localStorage.getItem("username")
					}
				}).then(msg=>{
					if(msg.status == 200){
					  this.$message({
		                message: '修改成功！',
		                type: 'success',
		                duration: 1500,
		                center: true,
		              });
				    }
				}).catch(err=>{
					this.$message.error('修改失败！')
				})
			}
		}
	}
</script>
<style scoped>
	.line{
		margin-bottom: 20px;
	}
</style>