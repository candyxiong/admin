<template>
  <div class="addUsers center">
    <h2>添加用户</h2>
    <form v-on:submit="postData" id="formInfo">
        <ul>
          <li>
            <h4>姓名</h4>
            <input type="text" placeholder="name" v-model="customer.name" name="username"/>
          </li>
          <li>
            <h4>电话</h4>
            <input type="text" placeholder="phone" v-model="customer.phone"/>
          </li>
          <li>
            <h4>邮箱</h4>
            <input type="text" placeholder="email" v-model="customer.email" name="email"/>
          </li>
          <li>
            <h4>学历</h4>
            <input type="text" placeholder="education" v-model="customer.education"/>
          </li>
          <li>
            <h4>毕业学校</h4>
            <input type="text" placeholder="graduationschool" v-model="customer.graduationschool"/>
          </li>
          <li>
            <h4>职业</h4>
            <input type="text" placeholder="profession" v-model="customer.profession"/>
          </li>
          <li>
            <h4>个人简介</h4>
            <textarea name="info" cols="30" rows="10" v-model="customer.info"></textarea>
          </li>
        </ul>
        <button type="submit">添加</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'addUsers',
    data () {
      return {
        customer:{}
      }
    },
    methods:{
      postData(e){
        var that = this;
        e.preventDefault();
        let data = {
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          education:this.customer.education,
          graduationschool:this.customer.graduationschool,
          profession:this.customer.profession,
          profile:this.customer.profile,
          id:this.customer.id
        }
        that.$http.post('http://localhost:3000/users',data)
        .then(function(res){
          console.log(res);
          that.$router.push({path:"/",query:{alert:'用户信息添加成功!'}})
        })
        .catch(function(error){
          console.log(error)
        })
        console.log('djjd')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addUsers h2{text-align: center;margin-bottom: 20px}
  .center{margin: 20px auto;width: 80%; padding: 20px;background: #eee}
  #formInfo ul li textarea{width: 100%;padding: 4px}
  #formInfo ul li{display: block;}
  #formInfo ul li input{width:100%;height: 30px; margin-bottom: 20px;padding: 4px}
</style>
