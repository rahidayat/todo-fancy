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
    },
    error: null

  },
  methods: {
    signup () {
      axios.post(`http://localhost:3000/signup`, this.register)
      console.log('pendaftaran sukses');
    },
    signin () {
      axios.post(`http://localhost:3000/signin`, this.login)
      .then(userData => {
        console.log('berhasil signin', userData);
        // localStorage.setItem('token', userData.data.token)
        // localStorage.setItem('id', userData.data._id)
        alert(`${userData.data.msg}`)
        // window.location.href = "main.html"
        console.log(userData);
      })
      .catch(err => {
        console.log('ini eroro ', err);
        console.log('in eror signin', err.response.data.msg)
        this.error = err.response.data.msg
        // alert('harap isi username dan password')
      })
    },
    addToDo () {
      axios.post()
    }
  }


})
