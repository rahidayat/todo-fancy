var app = new Vue({
  el: '#app',
  data: {
    register: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    login: {
      username: '',
      password: ''
    }

  },
  methods: {
    signup() {
      axios.post(`http://localhost:3000/signup`, this.register)
      console.log('pendaftaran sukses');
    },
    signin() {
      axios.post(`http://localhost:3000/signin`, this.login)

    }
  }


})
