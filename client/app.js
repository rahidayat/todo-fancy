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

  },
  methods: {
    signup () {
      axios.post(`http://35.197.154.136/signup`, this.register)
      console.log('pendaftaran sukses');
    },
    signin () {
      axios.post(`http://35.197.154.136/signin`, this.login)
      .then(userData => {
        // alert(`${userData.data.msg}`)
        // console.log('berhasil signin', userData);
        localStorage.setItem('token', userData.data.token)
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
    }
  },
  created () {
    // axios.get('http://35.197.154.136/todo')
    // .then(response => {
    //   this.todos = response.data
    // })
    let self = this
    axios({
      method: 'get',
      url: 'http://35.197.154.136/todo/user',
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('data respon',response.data);
      self.todos = response.data
    })
    .catch(err => {
      console.log(err)
      self.error = err.response.data.msg
    })
  }
})
