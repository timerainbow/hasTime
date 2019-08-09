<template>
  <div id="app">
  	<div class="nav">
  		<div class="container" style="height: 100%">
    			<div class="item-left">
    				    <router-link to="/">天牛笔记</router-link>
    			</div>
    			<div class="item-right">
  			  <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" @keyup.enter.native="search()">
  			       <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
  			  </el-input>
          <router-link to="/login">
                <span class="AM"></span>
                <img class="iconImg" src="../static/image/aministrator.png">
          </router-link> 
  			</div>
  		</div>		
  	</div>
  	<div style="height: 100%">
	    <router-view/>
	</div>
  </div>
</template>

<script>
//import '../static/common/common.css'
import Bus from './bus'
export default {
	  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        searchText: ''
      };
    },
    methods: {
    	search: function(){
        var _this = this;
        if(this.searchText == 'magic:take me home'){
          this.$router.push({path:'login'})
        }else{
          Bus.$emit('searchResult',this.searchText);
          this.$router.push({
            path: 'listArticle',
            query: {
              title: _this.searchText
            }
          });
        }
    	}
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: calc(100% - 60px);
}
.container{
	width: 1200px;
	margin: 0 auto;
}
html,body{
	margin: 0;
	padding: 0;
  height: 100%;
  overflow: hidden;
}
.nav{
	width: 100%;
	height: 60px;
	background-color: #545c64;
}
.fixclear:before{
	content: '';
	height: 0;
	visibility: hidden;
	clear: both;
	display: table;
}
.nav .item-right{
	height: 60px;
	line-height: 60px;
	float: right;
	width: 400px;
}
.nav .item-left{
	height: 60px;
	line-height: 60px;
	float: left;
	font-size: 30px;
}
.nav a{
	text-decoration: none;
	color: white;
}
.el-input-group{
  width: 70%;
}
.iconImg{
  width: 30px;
  height: 30px;
  position: relative;
  top: 10px;
  left: 25px;
}
.AM{
  font-size: 12px;
  padding-left: 10px;
}
</style>
