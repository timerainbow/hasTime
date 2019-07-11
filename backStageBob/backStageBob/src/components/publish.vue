<template>
  <div class="hello containerWrapper">

    <div class="line">
      <el-input placeholder="请输入内容" v-model="title">
        <template slot="prepend">标题：</template>
      </el-input>
    </div>
    <div id="editorElem" style="text-align: left;"></div>
    <div class="forPublishBtn">    
      <el-button type="primary" icon="el-icon-edit" @click="publishEditContent()">发表</el-button>
    </div>
  </div>
</template>

<script>
//import '../static/common/common.css'
import WangEditor  from 'wangeditor'
export default {
  name: 'publish',
  data () {
    return {
      editorContent: '',
      editor: new WangEditor ("#editorElem"),
      title:'',
      post_type: 'user',
      params_id: ''
    }
  },
  methods: {
    publishEditContent: function(){
      var editorContent = this.editor.txt.html();
      if(this.post_type != 'admin'){
          this.$http.post('/article/create',{
            title: this.title,
            content: editorContent
          }).then(msg=>{
            if(msg.status == 200){
              this.$message({
                message: '发布成功！',
                type: 'success',
                duration: 1500,
                center: true,
              });
            }
          }).catch(err=>{
            this.$message.error('发布失败！');
          })
        }else{
          this.$http.post('/article/update',{
            title: this.title,
            content: editorContent,
            id: this.params_id
          }).then(msg=>{
            if(msg.status == 200){
              this.$message({
                message: '修改成功！',
                type: 'success',
                duration: 1500,
                center: true,
              });
              this.$router.push({path:'/checkArticles'})
            }
          }).catch(err=>{
            this.$message.error('修改失败！');
          })
        }
    }
  },
  mounted(){
    this.params_id = this.$route.query.id;
    this.post_type = this.$route.query.type;
    this.editor.create()
    if(this.params_id){
      this.$http.get('/article/content',{
        params: {
          id: this.params_id
        }
      }).then((msg) => {
          var data = msg.data.data;

          this.title = data.title;
          this.article = data.content;
          this.editor.txt.html(this.article)
        }).catch(function(err){
          console.log(err);
        })
    }else{  
      this.editor.txt.html('<p>输入内容...</p>')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .containerWrapper{
    width: 100%;
    margin: 0 auto;
  }
  .forPublishBtn{
    margin-top: 20px;
  }
  .forPublishBtn button{
    float: right;
  }
  .line{
    margin-bottom: 20px;
  }
  .el-message{
    top:40%!important;
  }
</style>
