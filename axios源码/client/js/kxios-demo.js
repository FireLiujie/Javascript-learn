import kxios from './kxios-demo.js'

axios.get('http://localhost:7777/data').then(res => {
  console.log('kxios-res', res)
})
