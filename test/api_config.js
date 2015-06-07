describe('chrome.cast.ApiConfig', function() {
    var ApiConfig;

    beforeEach(function() {
        var chrome = require('../index');
        ApiConfig = chrome.cast.ApiConfig;
    });

    it('should be defined', function() {
        expect(ApiConfig).to.be.a('function');
    });

    it('should provide the configured data', function() {
        var apiConfig = new ApiConfig();
        expect(apiConfig).to.have.property('autoJoinPolicy');
        expect(apiConfig).to.have.property('defaultActionPolicy');
        expect(apiConfig).to.have.property('receiverListener');
        expect(apiConfig).to.have.property('sessionListener');
        expect(apiConfig).to.have.property('sessionRequest');
    });
});
