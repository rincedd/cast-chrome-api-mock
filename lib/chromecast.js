function fillChromecastNamespace(chromeNamespace) {
    var chrome = chromeNamespace || {};
    chrome.cast = {
        AutoJoinPolicy: require('./auto_join_policy'),
        ApiConfig: require('./api_config'),
        DefaultActionPolicy: require('./default_action_policy'),
        initialize: require('./initialize'),
        isAvailable: true,
        ReceiverAvailability: require('./receiver_availability'),
        VERSION: [1, 0]
    };

    chrome.cast.mock = require('./mock');

    return chrome;
}

module.exports = fillChromecastNamespace;
