import kxios from './Kxios'

// kxios.defaults.method = 'post'

// kxios.defaults.adaptor = function(configs) {
//   return nodeHttp(configs)
// }

kxios.defaults.transformResponse = function(data) {
  return JSON.parse(data)
}

kxios.interceptors.request.use(
  function(config) {
    console.log(1)
    return config
  },
  function() {
    console.log('err')
  }
)

kxios.interceptors.request.use(
  function(config) {
    console.log(2)
    return config
  },
  function() {
    console.log('err')
  }
)

kxios.interceptors.response.use(
  function(res) {
    console.log('response', res)
    return res
  },
  function() {
    console.log('err')
  }
)
kxios
  .get('/data', {
    baseURL: 'http://localhost:7777',
    headers: {
      name: 'liujie'
    }
  })
  .then(res => {
    console.log(res)
  })
console.log(kxios)
// kxios.get('http://localhost:7777/data').then(res => {
//   console.log('kxios-res', res)
// })

// let api1 = new Kxios({
//   baseURL: 'http://localhost:7777'
// })
// api1.('/data')
