<template>
  <div class="customers center">
    <alert v-bind:message="alert"></alert>
    <h2>{{title}}</h2>
    <input type="text" placeholder="搜索名字" v-model="searchInfo">
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
        <tr v-for="customer in filterBy(customers,searchInfo)">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link v-bind:to="'/cusDetails/' + customer.id">详情</router-link>
          </td>
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
        title:'首页',
        customers:[],
        alert:'',
        searchInfo:''
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
      },
      filterBy(customers,value){
        return customers.filter(function(customer){
          return customer.name.match(value)
        })
      }
    },
    created(){
      this.alert = this.$route.query.alert;  //接收
      this.customerData();
    },
    updated(){
      this.customerData();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{text-align: center}
  .center{margin: 0 auto;width: 80%}
  table{width: 100%}
  table thead tr th,table tbody tr td{width: 25%;border-bottom: 1px #ddd solid;padding: 10px 0;text-align: center}
</style>
