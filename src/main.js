(function () {
  //
  require('./css/style.scss')

  const Vue = require('vue');

  var app = new Vue({
    data: {
      message: 'Hello'
    },
    methods: {

    },
    mounted: function () {
      
    }
  })

  app.$mount('#app');
  //
})()
