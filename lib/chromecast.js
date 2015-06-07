function fillChromecastNamespace(chromeNamespace) {
    var chrome = chromeNamespace || {};
    chrome.cast = {
        ApiConfig: require('./api_config')
    };
    return chrome;
}

module.exports = fillChromecastNamespace;
