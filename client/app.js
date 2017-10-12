// var baseURL = 'http://localhost:3000'
var baseURL = 'http://35.197.154.136'
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
    error: null,
    todos: []
    // token: null
  },
  methods: {
    signup () {
      axios.post(`${baseURL}/signup`, this.register)
      console.log('pendaftaran sukses');
    },
    signin () {
      let self = this
      axios.post(`${baseURL}/signin`, this.login)
      .then(userData => {
        // alert(`${userData.data.msg}`)
        // console.log('berhasil signin', userData);
        localStorage.setItem('token', userData.data.token)
        // self.token = localStorage.getItem('token')
        // localStorage.setItem('id', userData.data._id)
        window.location.href = "main.html"
        // console.log(userData);
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
    },
    getTodo () {
      console.log('masuk gettodo');
      let self = this
      axios.get(`${baseURL}/todo/user/me`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      // axios({
      //   method: 'get',
      //   url: 'http://35.197.154.136/todo/user',
      //   headers: {
      //     token: localStorage.getItem('token')
      //   }
      // })
      .then(response => {
        console.log('data respon',response.data);
        self.todos = response.data
      })
      .catch(err => {
        console.log(err)
        self.error = err.response.data.msg
      })
    }
  },
  created () {
    this.getTodo()
  }
})
