Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
      text: '',
      color: '',
      img: ''
    },
    methods: {
        textRed: function () {
            this.color = 'red'
        },
        textBlu: function () {
            this.color = 'blue'
        },
        textGreen: function () {
            this.color = 'green'
        },
        imgStamp: function() {
            if (this.img == '') {
                this.img = 'https://www.opensymbol.it/wp-content/uploads/2021/01/Microsoft-Team-personalizzazione-background.jpg'
            } else {
                this.img = ''
            }
        }
    }
  })