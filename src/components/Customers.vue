<template>
  <div class="customers center">
    <alert v-bind:message="alert"></alert>
    <h2>{{title}}</h2>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>email</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link v-bind:to="'/cusDetails/' + customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: 'Customers',
    data () {
      return {
        title:'用户管理系统',
        customers:[],
        alert:''
      }
    },
    components:{
      Alert
    },
    methods:{
      customerData(){
        var that = this;
        that.$http.get('http://localhost:3000/users')
          .then(function(res){
            that.customers = res.data;
            //console.log(res.data);
        })
          .catch(function(error){
            console.log(error)
        })
      }
    },
    created(){
      this.alert = this.$route.query.alert;
      this.customerData();
    },
    updated(){
      this.customerData();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center{margin: 0 auto;width: 80%}
  table{width: 100%}
  table thead tr th,table tbody tr td{width: 25%;border-bottom: 1px #ddd solid;padding: 10px 0;text-align: center}
</style>
