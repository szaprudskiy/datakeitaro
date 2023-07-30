import getData from './getData.js'
import filterData from './filterData.js'

const loader = document.querySelector('.progress')
const resultBlock = document.getElementById('result')
const fetchBtn = document.getElementById('btn')
const filterBtn = document.getElementById('filterbtn')
const resultSubId = document.getElementById('resultSubId')

fetchBtn.addEventListener('click', async () => {
  loader.style.display = 'block'
  await getData()

  resultBlock.style.display = 'block'
  loader.style.display = 'none'
})

filterBtn.addEventListener('click', async () => {
  loader.style.display = 'block'
  await filterData()

  resultSubId.style.display = 'block'
  loader.style.display = 'none'
})
