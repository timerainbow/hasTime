<template>
  <section class="container">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="邮箱" prop="email">
	    <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
	    <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
	    <span class="status">{{ status.Msg }}</span>
	  </el-form-item>
	  <el-form-item label="验证码" prop="code">
	    <el-input v-model.number="ruleForm.code"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="password">
	    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
	  </el-form-item>
	  <el-form-item label="确认密码" prop="checkPassword">
	    <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="register">注册</el-button>
	    <span class="error">{{ error }}</span>
	  </el-form-item>
	</el-form>
  </section>
</template>
<script>
import axios from 'axios'
export default{
	layout: 'blank',
	data() {
		return{
			statusMsg: '',
			error: '',
			ruleForm:{
				email: '',
				password: '',
				checkPassword: '',
				code: ''
			},
			rules: {
			  email:[
				 { required:true,type:'email',message:'请输入邮箱',trigger: 'blur' }
			  ],
	          password: [
	            { required:true,message:'请输入密码',trigger: 'blur' }
	          ],
	          checkPassword: [
	            { required:true,message:'确认密码',trigger: 'blur' },
	            {
	            	validator:(rule,value,callback)=>{
	            		if(value === ''){
	            			callback(new Error('请再次输入密码'))
	            		}else if(value !== this.ruleForm.checkPassword){
	            			callback(new Error('两次输入密码不一致'))
	            		}else{
	            			callback()
	            		}
	            	},
	            	trigger:'blur'
	            }
	          ]
	        }
		}
	},
	methods: {
		sendMsg: function(){
			const self = this;
			let namePass
			let emailPass
			if(self.timerid){
				return false
			}
			this.$refs['ruleForm'].validateField('name',(valid)=>{
				namePass = valid
			})
			self.statusMsg = ''
			if(namePass){
				return false
			}
			this.$refs['ruleForm'].validateField('email',(valid)=>{
				emailPass = valid
			})

			if(!namePass&&!emailPass){
				self.$axios.post('/users/verify',{
					username:encodeURIComponent(self.ruleForm.name),
					email:self.ruleForm.email
				}).then((data) => {
					let status = data.status
					let datas = data.data
					if(status===200&&datas&&datas.code==0){
						let count = 60;
						self.statusMsg = `验证码已发送，剩余${count--}秒`
						self.timerid = setInterval(function(){
							if(count == 0){
								self.statusMsg = `验证码已发送，剩余${count--}秒`
								clearInterval(self.timerid)
							}
						},1000)
					}else{
						self.statusMsg = datas.msg
					}
				})
			}
		},
		register: function(){

		}
	}
}
</script>
<style>
</style>