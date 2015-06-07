describe('chrome.cast.ApiConfig', function() {
    var chrome = require('../index'), apiConfig;

    beforeEach(function() {
        apiConfig = new chrome.cast.ApiConfig();
    });

    it('should provide the required fields', function() {
        [
            'autoJoinPolicy',
            'defaultActionPolicy',
            'receiverListener',
            'sessionListener',
            'sessionRequest'
        ].forEach(function(field) {
                expect(apiConfig).to.have.property(field);
            });
    });

    it('should set required default values', function() {
        expect(apiConfig.autoJoinPolicy).to.equal(chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED);
        expect(apiConfig.defaultActionPolicy).to.equal(chrome.cast.DefaultActionPolicy.CREATE_SESSION);
    });

    it('should store input values', function() {
        var sessionRequest = {},
            sessionListener = function sessionListener() {},
            receiverListener = function receiverListener() {};
        apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener,
            chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED, chrome.cast.DefaultActionPolicy.CAST_THIS_TAB);
        expect(apiConfig.sessionRequest).to.equal(sessionRequest);
        expect(apiConfig.sessionListener).to.equal(sessionListener);
        expect(apiConfig.receiverListener).to.equal(receiverListener);
        expect(apiConfig.autoJoinPolicy).to.equal(chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);
        expect(apiConfig.defaultActionPolicy).to.equal(chrome.cast.DefaultActionPolicy.CAST_THIS_TAB);
    });
});
