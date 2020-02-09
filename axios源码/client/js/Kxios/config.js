import ajax from './ajax'
export default {
  baseURL: '',
  url: '',
  method: 'get',
  headers: {
    'content-type': 'application/json'
  },
  adaptor(config) {
    return ajax(config)
  }
}
