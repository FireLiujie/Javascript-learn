import axios from 'axios'

axios.get('http://localhost:7777/data').then(res => {
  console.log('axios-res', res)
})
