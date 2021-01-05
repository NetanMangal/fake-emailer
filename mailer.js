var SibApiV3Sdk = require('sib-api-v3-sdk');
var keys = require("./config");

var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = keys.sendinblueApiKey;
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = { "name": "From name", "email": "trasean.jacy@auweek.net" };
emailCampaigns.type = "classic";

// # Content that will be sent\
// htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',
// # Select the recipients\
// recipients: { listIds: [2, 7] },
// # Schedule the sending in one hour\
// scheduledAt: '2018-01-01 00:00:01'
// }

apiInstance.createEmailCampaign(emailCampaigns).then(function (data) {
    console.log('API called successfully. Returned data: ' + data);
}, function (error) {
    console.error(error);
});