const getData = async () => {
  const campaignId = document.getElementById('campaignId').value
  const landingId = document.getElementById('landingId').value
  const dateFrom = document.getElementById('dateFrom').value
  const dateTo = document.getElementById('dateTo').value
  //urll

  const apiUrl = 'https://datakeitaro.vercel.app/getdata'

  try {
    let requestBody = {
      dateFrom,
      dateTo,
    }

    if (campaignId) {
      requestBody.campaignId = campaignId
    }

    if (landingId) {
      requestBody.landingId = landingId
    }
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    const data = await response.json()
    const getData = data.data.rows

    const totalCount = getData.length

    const emptyCountSubId19 = getData.reduce((count, item) => {
      return item.sub_id_19 === '' ? count + 1 : count
    }, 0)

    const percentEmptySubId19 = (emptyCountSubId19 / totalCount) * 100

    const subid19Refusal = document.getElementById('subid19Refusal')

    subid19Refusal.textContent = percentEmptySubId19.toFixed(2) + ' %'

    const sumSubId19 = getData.reduce((total, obj) => {
      const value = parseInt(obj.sub_id_19, 10)
      return !isNaN(value) ? total + value : total
    }, 0)

    const subid19Average = document.getElementById('subid19Average')
    subid19Average.textContent = Math.round(sumSubId19 / totalCount)

    const sumSubId20 = getData.reduce((total, obj) => {
      const value = parseInt(obj.sub_id_20, 10)
      return !isNaN(value) ? total + value : total
    }, 0)

    const subid20Average = document.getElementById('subid20')
    subid20Average.textContent = (sumSubId20 / totalCount).toFixed(2)

    const totalInitialCheckOut = getData.reduce((acc, obj) => {
      if (obj.sub_id_18 !== '') {
        return acc + 1
      } else {
        return acc
      }
    }, 0)

    const totalClicks = getData.reduce((acc, obj) => {
      if (obj.sub_id_20 !== '') {
        return acc + 1
      } else {
        return acc
      }
    }, 0)

    const initialCheckout = document.getElementById('initialCheckout')

    initialCheckout.textContent =
      ((totalInitialCheckOut / totalClicks) * 100).toFixed(2) + ' %'

    const totalIsLead = getData.reduce((count, item) => {
      return item.is_lead === true ? count + 1 : count
    }, 0)

    const lead = document.getElementById('isLead')

    lead.textContent = ((totalIsLead / totalCount) * 100).toFixed(2)

    const filteredData = getData.filter((item) => item.sub_id_19 > 60)

    const countfilteredData = filteredData.length

    const factorConversion = document.getElementById('factorConversion')

    factorConversion.textContent = (
      (countfilteredData / totalCount) *
      100
    ).toFixed(2)

    const totalfb00 = getData.reduce((count, item) => {
      return item.sub_id_16 === '' ? count + 1 : count
    }, 0)
    const fb00 = document.getElementById('fb-00')

    fb00.textContent = ((totalfb00 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb10 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-10' ? count + 1 : count
    }, 0)
    const fb10 = document.getElementById('fb-10')

    fb10.textContent = ((totalfb10 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb20 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-20' ? count + 1 : count
    }, 0)
    const fb20 = document.getElementById('fb-20')

    fb20.textContent = ((totalfb20 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb30 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-30' ? count + 1 : count
    }, 0)
    const fb30 = document.getElementById('fb-30')

    fb30.textContent = ((totalfb30 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb40 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-40' ? count + 1 : count
    }, 0)
    const fb40 = document.getElementById('fb-40')

    fb40.textContent = ((totalfb40 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb50 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-50' ? count + 1 : count
    }, 0)
    const fb50 = document.getElementById('fb-50')

    fb50.textContent = ((totalfb50 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb60 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-60' ? count + 1 : count
    }, 0)
    const fb60 = document.getElementById('fb-60')

    fb60.textContent = ((totalfb60 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb70 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-70' ? count + 1 : count
    }, 0)
    const fb70 = document.getElementById('fb-70')

    fb70.textContent = ((totalfb70 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb80 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-80' ? count + 1 : count
    }, 0)
    const fb80 = document.getElementById('fb-80')

    fb80.textContent = ((totalfb80 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb90 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-90' ? count + 1 : count
    }, 0)
    const fb90 = document.getElementById('fb-90')

    fb90.textContent = ((totalfb90 / totalCount) * 100).toFixed(2) + ' %'

    const totalfb100 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-100' ? count + 1 : count
    }, 0)
    const fb100 = document.getElementById('fb-100')

    fb100.textContent = ((totalfb100 / totalCount) * 100).toFixed(2) + ' %'
  } catch (error) {
    console.error('Ошибка получения данных от сервера', error)
  }
}

export default getData
