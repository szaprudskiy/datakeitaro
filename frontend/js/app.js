import getData from './getData.js'
import filterData from './filterData.js'

const loader = document.querySelector('.progress')
const resultBlock = document.getElementById('result')
const fetchBtn = document.getElementById('btn')
const filterBtn = document.getElementById('filterbtn')
const resultSubId = document.getElementById('resultSubId')

fetchBtn.addEventListener('click', () => {
  loader.style.display = 'block'
  getData()

  resultBlock.style.display = 'block'
  loader.style.display = 'none'
})

filterBtn.addEventListener('click', () => {
  loader.style.display = 'block'
  filterData()

  resultSubId.style.display = 'block'
  loader.style.display = 'none'
})
