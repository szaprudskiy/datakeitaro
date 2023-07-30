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

    const totalCount = getData.length

    const emptyCountSubId19 = getData.reduce((count, item) => {
      return item.sub_id_19 === '' ? count + 1 : count
    }, 0)

    const percentEmptySubId19 = (emptyCountSubId19 / totalCount) * 100

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
      `${countSubId}`, // Replace with your calculated values
    ]

    dataCells.forEach((dataCellText) => {
      const td = document.createElement('td')
      td.textContent = dataCellText
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

      // Get the parent element where the new table should be appended
      const resultDiv = document.getElementById('resultSubId')

      const title = document.createElement('h5')

      title.textContent = `Информация по ${matchingKey}: ${subIdValue}`

      resultDiv.appendChild(title)
      // Append the new table to the parent element
      resultDiv.appendChild(table)
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
