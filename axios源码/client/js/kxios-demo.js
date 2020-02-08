import kxios from './Kxios'
console.log(kxios)

kxios.get('http://localhost:7777/data').then(res => {
  console.log('kxios-res', res)
})
