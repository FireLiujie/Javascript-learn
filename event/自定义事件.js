let event = new CustomEvent('test', { detail: '测试自定义事件' })

window.dispatchEvent(event)

window.addEventListener('test', e => {
  console.log(e) // {detail: '测试自定义事件'}
})
