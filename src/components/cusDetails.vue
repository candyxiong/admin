<template>
  <div class="details center">
    <h2>{{title}}</h2>
    <div class="detailHeader">
      <h3><router-link to="/">返回</router-link></h3>
      <h4>
        <span><router-link v-bind:to="'/edit/' + customer.id">编辑</router-link></span>
        <button v-on:click="deleteCus(customer.id)">删除</button>
      </h4>
    </div>
    <h3>{{customer.name}}</h3>
    <ul>
      <li>{{customer.phone}}</li>
      <li>{{customer.email}}</li>
      <li>{{customer.education}}</li>
      <li>{{customer.profession}}</li>
      <li>{{customer.profile}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'cusDetails',
    data () {
      return {
        title:'我是details页面',
        customer:""
      }
    },
    methods:{
      customerData(id){
        var that = this;
        that.$http.get('http://localhost:3000/users/'+id)
        .then(function(res){
          that.customer = res.data;
        })
        .catch(function(error){
          console.log(error)
        })
      },
      deleteCus(id){
        var that = this;
        that.$http.delete('http://localhost:3000/users/'+id)
          .then(function(res){
            console.log(res);
          that.$router.push({path:'/',query:{alert:'用户删除成功!'}})
        })
          .catch(function(error){
            console.log(error)
        })
      }
    },
    created(){
      this.customerData(this.$route.params.id)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detailHeader:after{content:"";height:0;line-height:0;display:block;visibility:hidden;clear:both}
  ul li{display: block;border-bottom: 1px #eee solid;margin: 10px 0;}
  .center{margin: 0 auto;width: 80%}
  .detailHeader{margin: 20px 0}
  .details h2{text-align: center}
  .detailHeader h3{float: left}
  .detailHeader h4{float: right}
  .detailHeader h4 span{border: 1px #aaa solid;color: #aaa}
</style>
