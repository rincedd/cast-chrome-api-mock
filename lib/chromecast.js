function fillChromecastNamespace(chromeNamespace) {
    var chrome = chromeNamespace || {};
    chrome.cast = {
        AutoJoinPolicy: require('./auto_join_policy'),
        ApiConfig: require('./api_config'),
        DefaultActionPolicy: require('./default_action_policy')
    };
    return chrome;
}

module.exports = fillChromecastNamespace;
