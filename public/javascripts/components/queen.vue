<style scoped>
  .red {
    color: #f00;
  }
</style>

<template>
  <div class="red">{{msg}}</div>
</template>

<script>
  module.exports = {
    props: ['msg']
  }
</script>
