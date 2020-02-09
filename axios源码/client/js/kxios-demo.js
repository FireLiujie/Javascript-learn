import kxios from './Kxios'
// import Kxios from './Kxios/kxios'

// kxios.defaults.method = 'post'
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
