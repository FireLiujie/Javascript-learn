import kxios from './Kxios'

kxios.get('http://localhost:7777/data').then(res => {
  console.log('kxios-res', res)
})
