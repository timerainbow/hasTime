<template>
	<div id="root" style="margin-top: 30px;">
		<div class="container">
			<el-row :gutter="20">
			  <el-col :span="5">
			  	<div class="grid-content bg-purple">			  		
			  		<el-row class="tac">
					  <el-col :span="24">
					    <el-menu
					      default-active="1"
					      class="el-menu-vertical-demo"
					      @open="handleOpen"
					      @close="handleClose"
					      background-color="#545c64"
					      text-color="#fff"
					      active-text-color="#ffd04b">
					      <router-link :to="{ path: '/publish'}">
						      <el-menu-item index="1">
						        <i class="el-icon-edit"></i>
						        <span slot="title">发布笔记</span>
						      </el-menu-item>
						  </router-link>
						  <router-link :to="{ path: '/checkArticles'}">
						      <el-menu-item index="2">
						        <i class="el-icon-document"></i>
						        <span slot="title">我的笔记</span>
						      </el-menu-item>
						  </router-link>
						  <router-link :to="{ path: '/set'}">
						      <el-menu-item index="4">
						        <i class="el-icon-setting"></i>
						        <span slot="title">修改密码</span>
						      </el-menu-item>
						  </router-link>
					    </el-menu>
					  </el-col>
					</el-row>
			  	</div>
			  </el-col>
			  <el-col :span="19">
			  	<div class="grid-content bg-purple">
			  		<router-view/>
			  	</div>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>
<script type="text/javascript">
	//import '../static/common/common.css'
	export default {
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	  }
</script>
<style scoped>
  .container{
	width: 1200px;
	margin: 0 auto;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  a{
	text-decoration: none;
	color: white;
  }
  li{
	list-style: none;
	text-align: left;
	line-height: 36px;
	font-size: 20px;
  }
</style>