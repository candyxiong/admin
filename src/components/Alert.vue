<template>
  <div class="alert">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'alert',
    props:['message'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
