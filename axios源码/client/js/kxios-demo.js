import kxios from './Kxios/Kxios.js'

kxios.get('http://localhost:7777/data').then(res => {
  console.log('kxios-res', res)
})
