<style scoped>
  .red {
    color: #f00;
    font-size: 15px;
  }
</style>

<template>
  <h1>How many queens do you want?</h1>
  <input v-model="total" v-on:keyup.enter="showQueens" />
  <button v-on:click="showQueens">Show me</button>
  <div v-for="q in queens">
    <queen :msg="q.msg"></queen>
  </div>
</template>

<script>
  var Queen = require('./queen.vue'); 

  module.exports = {
    data: function () {
      return {
        total: 0,
        queens: []
      }
    },

    methods: {
      showQueens: function() {
        var totalQueens = parseInt(this.total);
        if (isNaN(totalQueens) || totalQueens < 1) {
          alert('Kid, you have no idea about integers');
          return;
        }
        if (totalQueens > 20) {
          alert('Too many! Try a smaller number');
          return;
        }
        this.queens = Array.apply(null, { length: this.total }).map((x, y) => {
          return {
            msg: Array.apply(null, { length: y + 1 }).map(() => 'gua').join(' ')
          }
        });
      }
    },

    components: {
      queen: Queen
    }
  }
</script>
