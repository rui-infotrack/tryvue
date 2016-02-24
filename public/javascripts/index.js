var Vue = require('vue')
var App = require('./components/app.vue')

window.onload = function() {
  new Vue({
    el: 'body',
    components: {
      app: App
    }
  })
};
