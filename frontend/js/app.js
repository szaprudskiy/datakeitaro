import getData from './getData.js'
import filterData from './filterData.js'

const loader = document.querySelector('.progress')
const resultBlock = document.getElementById('result')
const fetchBtn = document.getElementById('btn')
const filterBtn = document.getElementById('filterbtn')
const resultSubId = document.getElementById('resultSubId')

fetchBtn.addEventListener('click', async () => {
  loader.style.display = 'block'

  const selectedPeriod = document.getElementById('periodSelector').value
  let dateFrom = document.getElementById('dateFrom').value
  let dateTo = document.getElementById('dateTo').value

  const campaignId = document.getElementById('campaignId').value
  const landingId = document.getElementById('landingId').value

  if (!dateFrom || !dateTo) {
    if (selectedPeriod === 'today') {
      const today = new Date()
      dateFrom = dateTo = today.toISOString().split('T')[0]
    } else if (selectedPeriod === 'yesterday') {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      dateFrom = dateTo = yesterday.toISOString().split('T')[0]
    } else if (selectedPeriod === 'lastWeek') {
      const today = new Date()
      const lastWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      )
      dateFrom = lastWeek.toISOString().split('T')[0]
      dateTo = today.toISOString().split('T')[0]
    }
  }

  await getData(dateFrom, dateTo, campaignId, landingId)

  resultBlock.style.display = 'block'
  loader.style.display = 'none'
})

filterBtn.addEventListener('click', () => {
  loader.style.display = 'block'
  filterData()

  resultSubId.style.display = 'block'
  loader.style.display = 'none'
})
