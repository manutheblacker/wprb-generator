import fetch from 'node-fetch'

const GA_MEASUREMENT_ID = 'G-CMTYNTC9MJ'
const GA_API_SECRET = '1iduHGjTSnSi6Sjsg6Sa6g'
const GA_API_ENDPOINT = 'https://www.google-analytics.com/mp/collect'

const ga4Track = async (eventName, eventParams) => {
  const clientId = 'wprb-tracker-2023'
  const url = `${GA_API_ENDPOINT}?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`

  const eventPayload = {
    client_id: clientId,
    events: [
      {
        name: eventName,
        params: eventParams,
      },
    ],
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventPayload),
  }

  try {
    const response = await fetch(url, requestOptions)
    if (response.ok) {
      console.log('Custom event sent successfully.')
    } else {
      console.error('Error sending custom event:', response.statusText)
    }
  } catch (error) {
    console.error('Error sending custom event:', error)
  }
}
export default ga4Track
