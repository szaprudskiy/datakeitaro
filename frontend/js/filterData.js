const filterData = async () => {
  const campaignId = document.getElementById('campaignId').value
  const offerId = document.getElementById('offerId').value
  const dateFrom = document.getElementById('dateFrom').value
  const dateTo = document.getElementById('dateTo').value
  const subIdValue = document.getElementById('subid').value

  const apiUrl = 'https://datakeitaro.vercel.app/getdata'

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campaignId, offerId, dateFrom, dateTo }),
    })
    const data = await response.json()
    const getData = data.data.rows

    getData.forEach((element) => {
      console.log(element.sub_id_23)
    })

    const filteredSubId = getData.filter((item) => {
      return (
        item.sub_id_21 === subIdValue ||
        item.sub_id_22 === subIdValue ||
        item.sub_id_23 === subIdValue ||
        item.sub_id_24 === subIdValue ||
        item.sub_id_25 === subIdValue ||
        item.sub_id_26 === subIdValue ||
        item.sub_id_27 === subIdValue ||
        item.sub_id_28 === subIdValue ||
        item.sub_id_29 === subIdValue ||
        item.sub_id_30 === subIdValue
      )
    })

    const countSubId = filteredSubId.length

    console.log(countSubId)

    const emptyCountSubId19 = getData.reduce((count, item) => {
      return item.sub_id_19 === '' ? count + 1 : count
    }, 0)

    const percentEmptySubId19 = (emptyCountSubId19 / countSubId) * 100

    const sumSubId19 = getData.reduce((total, obj) => {
      const value = parseInt(obj.sub_id_19, 10)
      return !isNaN(value) ? total + value : total
    }, 0)

    const subid19Average = Math.round(sumSubId19 / countSubId)

    const sumSubId20 = getData.reduce((total, obj) => {
      const value = parseInt(obj.sub_id_20, 10)
      return !isNaN(value) ? total + value : total
    }, 0)

    const subid20Average = (sumSubId20 / countSubId).toFixed(2)

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

    const initialCheckout =
      ((totalInitialCheckOut / totalClicks) * 100).toFixed(2) + ' %'

    const totalIsLead = getData.reduce((count, item) => {
      return item.is_lead === true ? count + 1 : count
    }, 0)

    const lead = ((totalIsLead / countSubId) * 100).toFixed(2)

    const filteredData = getData.filter((item) => item.sub_id_19 > 60)

    const countfilteredData = filteredData.length

    const factorConversion = ((countfilteredData / countSubId) * 100).toFixed(2)

    const totalfb10 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-10' ? count + 1 : count
    }, 0)

    const fb10 = ((totalfb10 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb20 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-20' ? count + 1 : count
    }, 0)

    const fb20 = ((totalfb20 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb30 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-30' ? count + 1 : count
    }, 0)

    const fb30 = ((totalfb30 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb40 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-40' ? count + 1 : count
    }, 0)

    const fb40 = ((totalfb40 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb50 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-50' ? count + 1 : count
    }, 0)

    const fb50 = ((totalfb50 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb60 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-60' ? count + 1 : count
    }, 0)

    const fb60 = ((totalfb60 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb70 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-70' ? count + 1 : count
    }, 0)

    const fb70 = ((totalfb70 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb80 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-80' ? count + 1 : count
    }, 0)

    const fb80 = ((totalfb80 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb90 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-90' ? count + 1 : count
    }, 0)

    const fb90 = ((totalfb90 / countSubId) * 100).toFixed(2) + ' %'

    const totalfb100 = getData.reduce((count, item) => {
      return item.sub_id_16 === 'fb-100' ? count + 1 : count
    }, 0)

    const fb100 = ((totalfb100 / countSubId) * 100).toFixed(2) + ' %'
    const allfb = [
      `fb-10: ${fb10}`,
      `fb-20: ${fb20}`,
      `fb-30: ${fb30}`,
      `fb-40: ${fb40}`,
      `fb-50: ${fb50}`,
      `fb-60: ${fb60}`,
      `fb-70: ${fb70}`,
      `fb-80: ${fb80}`,
      `fb-90: ${fb90}`,
      `fb-100: ${fb100}`,
    ]
    const joinedFb = allfb.join('<br>')
    // Create the <table> element
    const table = document.createElement('table')
    table.className = 'col s12' // Add any desired classes

    // Create the <thead> element and its row with table headers
    const thead = document.createElement('thead')
    const theadRow = document.createElement('tr')

    const headers = [
      '% Отказа',
      'Кол-во кликов sub_id',
      'Среднее время',
      'Cреднее кол-во кликов',
      '% Людей приступивших к заполнению формы',
      '% Людей оставивших лид',
      'Коэффициент конверсии',
      'Скрол',
    ]

    headers.forEach((headerText) => {
      const th = document.createElement('th')
      th.textContent = headerText
      theadRow.appendChild(th)
    })

    thead.appendChild(theadRow)

    // Create the <tbody> element and its row with table data
    const tbody = document.createElement('tbody')
    const tbodyRow = document.createElement('tr')

    const dataCells = [
      percentEmptySubId19.toFixed(2) + ' %',
      `${countSubId}`,
      subid19Average,
      subid20Average,
      initialCheckout,
      lead,
      factorConversion,
      joinedFb,
    ]

    dataCells.forEach((dataCellText) => {
      const td = document.createElement('td')
      td.innerHTML = dataCellText
      tbodyRow.appendChild(td)
    })

    tbody.appendChild(tbodyRow)

    // Append the <thead> and <tbody> to the <table>
    table.appendChild(thead)
    table.appendChild(tbody)

    const keysSubId = getData.filter((item) => {
      const subIdKeys = [
        'sub_id_21',
        'sub_id_22',
        'sub_id_23',
        'sub_id_24',
        'sub_id_25',
        'sub_id_26',
        'sub_id_27',
        'sub_id_28',
        'sub_id_29',
        'sub_id_30',
      ]
      const matchingKey = subIdKeys.find((key) => item[key] === subIdValue)
      console.log(matchingKey)
      return matchingKey !== undefined // Вернуть true, если найден соответствующий ключ
    })

    // Если keysSubId не пустой, значит, найдены объекты с соответствующим sub_id
    if (keysSubId.length > 0) {
      // Получить ключ (название свойства) из первого объекта, так как предполагается, что все объекты в массиве имеют одинаковую структуру
      const matchingKey = Object.keys(keysSubId[0]).find(
        (key) => keysSubId[0][key] === subIdValue
      )

      if (subIdValue) {
        // Get the parent element where the new table should be appended
        const resultDiv = document.getElementById('resultSubId')

        const title = document.createElement('h5')

        title.textContent = `Информация по ${matchingKey}: ${subIdValue}`

        resultDiv.appendChild(title)
        // Append the new table to the parent element
        resultDiv.appendChild(table)
      }

      // matchingKey содержит название свойства (название sub_id), которое соответствует subIdValue
      console.log('Найденное название sub_id:', matchingKey)
    } else {
      // Если keysSubId пустой, значит, объекты с таким sub_id не были найдены
      console.log('Объекты с таким sub_id не найдены')
    }
  } catch (error) {
    console.error('Ошибка получения данных от сервера', error)
  }
}

export default filterData
