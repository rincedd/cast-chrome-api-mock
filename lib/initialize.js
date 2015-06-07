var Mock = require('./mock'),
    ApiConfig = require('./api_config'),
    assert = require('assert');

/**
 * @param {ApiConfig} apiConfig
 * @param {function} successCallback
 * @param {function} errorCallback
 */
function initialize(apiConfig, successCallback, errorCallback) {
    assert(apiConfig instanceof ApiConfig);
    Mock.setSessionListener(apiConfig.sessionListener);
    Mock.setReceiverListener(apiConfig.receiverListener);
}

module.exports = initialize;
