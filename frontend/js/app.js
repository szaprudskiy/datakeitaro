import getData from './getData.js'
import filterData from './filterData.js'

const loader = document.querySelector('.progress')
const resultBlock = document.getElementById('result')
const fetchBtn = document.getElementById('btn')
const filterBtn = document.getElementById('filterbtn')
const resultSubId = document.getElementById('resultSubId')
const todayButton = document.getElementById('todayButton')
const yesterdayButton = document.getElementById('yesterdayButton')
const lastWeekButton = document.getElementById('lastWeekButton')

todayButton.addEventListener('click', () => {
  loader.style.display = 'block'
  const today = new Date()
  const dateFrom = today.toISOString().split('T')[0]
  const dateTo = dateFrom
  const campaignId = document.getElementById('campaignId').value
  const landingId = document.getElementById('landingId').value
  getData(dateFrom, dateTo, campaignId, landingId)
  resultSubId.style.display = 'block'
  loader.style.display = 'none'
})

yesterdayButton.addEventListener('click', () => {
  loader.style.display = 'block'
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const dateFrom = yesterday.toISOString().split('T')[0]
  const dateTo = dateFrom
  const campaignId = document.getElementById('campaignId').value
  const landingId = document.getElementById('landingId').value
  getData(dateFrom, dateTo, campaignId, landingId)
  resultSubId.style.display = 'block'
  loader.style.display = 'none'
})

lastWeekButton.addEventListener('click', () => {
  loader.style.display = 'block'
  const today = new Date()
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  )
  const dateFrom = lastWeek.toISOString().split('T')[0]
  const dateTo = today.toISOString().split('T')[0]
  const campaignId = document.getElementById('campaignId').value
  const landingId = document.getElementById('landingId').value
  getData(dateFrom, dateTo, campaignId, landingId)
  resultSubId.style.display = 'block'
  loader.style.display = 'none'
})

fetchBtn.addEventListener('click', () => {
  loader.style.display = 'block'
  const dateFrom = document.getElementById('dateFrom').value
  const dateTo = document.getElementById('dateTo').value
  const campaignId = document.getElementById('campaignId').value
  const landingId = document.getElementById('landingId').value

  getData(dateFrom, dateTo, campaignId, landingId)

  resultBlock.style.display = 'block'
  loader.style.display = 'none'
})

filterBtn.addEventListener('click', () => {
  loader.style.display = 'block'
  const dateFrom = document.getElementById('dateFrom').value
  const dateTo = document.getElementById('dateTo').value
  const campaignId = document.getElementById('campaignId').value
  const landingId = document.getElementById('landingId').value
  const subIdValue = document.getElementById('subid').value
  filterData(dateFrom, dateTo, campaignId, landingId, subIdValue)

  resultSubId.style.display = 'block'
  loader.style.display = 'none'
})
