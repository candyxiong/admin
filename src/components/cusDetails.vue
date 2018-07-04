<template>
  <div class="details center">
    <h2>{{customer.name}}</h2>
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
          console.log(res.data);
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
  ul li{display: block;border-bottom: 1px #eee solid;margin: 10px 0;}
  .center{margin: 0 auto;width: 80%}
</style>
