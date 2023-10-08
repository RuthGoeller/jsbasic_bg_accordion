const btn = document.querySelectorAll('.question-btn')
const question = document.querySelectorAll('.question')

btn.forEach((item)=>{
  item.addEventListener('click',(e)=>{
e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
  })
})