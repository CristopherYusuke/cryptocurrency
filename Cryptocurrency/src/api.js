// const URL = 'http://192.168.177.140:55274/api'
// const URL = 'http://192.168.177.131:55274/api'

export default {
  post (path, body) {
    var headers = {
      'Content-Type': 'application/json',
      'Token': localStorage.getItem('token')
    }
    if (path.search('ValidarAcesso') > -1) {
      delete headers.Token
    }
    const promise = new Promise((resolve, reject) => {
      fetch(localStorage.getItem('url') + path, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resolve(data)
          })
        } else {
          response.json().then((error) => {
            const err = {
              message: (error.Mensagem) ? error.Mensagem : error.Message,
              code: error.code
            }
            reject(err)
          })
        }
      })
      .catch((erro) => {
        reject(erro)
      })
    })

    return promise
  },
  get (path) {
    var headers = {
      'Content-Type': 'application/json',
      'Token': localStorage.getItem('token')
    }
    const promise = new Promise((resolve, reject) => {
      fetch(localStorage.getItem('url') + path, {
        method: 'GET',
        headers
      })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resolve(data)
          })
        } else {
          response.json().then((error) => {
            const err = {
              message: (error.Mensagem) ? error.Mensagem : error.Message,
              code: error.code
            }
            reject(err)
          })
        }
      })
      .catch((erro) => {
        reject(erro)
      })
    })

    return promise
  }
}
