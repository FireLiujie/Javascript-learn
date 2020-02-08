import kxios from './Kxios'
// import Kxios from './Kxios/kxios'
console.log(kxios)

kxios.defaults.method = 'post'
kxios.get('http://localhost:7777/data').then(res => {
  console.log('kxios-res', res)
})

// let api1 = new Kxios({
//   baseURL: 'http://localhost:7777'
// })
// api1.('/data')
