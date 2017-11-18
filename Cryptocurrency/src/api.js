const URL = 'https://api.coinmarketcap.com/v1/'

export default {
  post (path, body) {
    return new Promise((resolve, reject) => {
      fetch(URL + path, {
        method: 'POST',
        body: JSON.stringify(body)
      })
      .then((response) => {
        if (response.status === 200) {
          response.json().then(resolve)
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
      .catch(reject)
    })
  },
  get (path) {
    return new Promise((resolve, reject) => {
      fetch(URL + path, {
        method: 'GET'
      })
      .then((response) => {
        if (response.status === 200) {
          response.json().then(resolve)
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
      .catch(reject)
    })
  }
}
