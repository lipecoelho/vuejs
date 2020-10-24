<template>
  <div id="app">{{title}}
    <button @click="title = '#########'">Add</button>
  </div>
</template>

<script>
  export default {
    data : function(){
      return {
        title: 'VueJs Title'
      }
    }
  }
</script>  

<style>
  #app {
    font-weight: bold;
    color: green
  }
</style>