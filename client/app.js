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
    newTodo: {
      task_name: '',
      tags: ''
    },
    error: null,
    todos: [],
    welcome: ''
    // token: null
  },
  methods: {
    signup () {
      axios.post(`${baseURL}/signup/`, this.register)
      console.log('pendaftaran sukses');
    },
    signin () {
      let self = this
      axios.post(`${baseURL}/signin/`, this.login)
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
    addTodo () {
      axios.post(`${baseURL}/todo/`, this.newTodo, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(todo => {
        console.log('ini data todo baru: ', todo)
        this.getTodo()
      })
      .catch(err => console.log(err))
    },
    getTodo () {
      console.log('masuk gettodo');
      let self = this
      axios.get(`${baseURL}/todo/user/me`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log('data respon',response.data);
        self.todos = response.data
        self.welcome = this.todos[0].user_id.username
      })
      .catch(err => {
        console.log(err)
        self.error = err.response.data.msg
      })
    }
  },
  created () {
    // this.welcome = ''
    this.getTodo()
  }
})
