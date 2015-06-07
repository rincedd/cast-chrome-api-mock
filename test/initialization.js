describe('Cast initialization', function() {
    var chrome = require('../index'),
        sessionListener, receiverListener, successCallback, errorCallback;

    beforeEach(function() {
        sessionListener = sinon.spy();
        receiverListener = sinon.spy();
        successCallback = sinon.spy();
        errorCallback = sinon.spy();
        var apiConfig = new chrome.cast.ApiConfig({}, sessionListener, receiverListener);
        chrome.cast.initialize(apiConfig, successCallback, errorCallback);
    });

    it('should call the receiver listener when a receiver availability change is triggered', function() {
        chrome.cast.mock.triggerReceiverAvailable();
        expect(receiverListener).to.have.been.calledWith(chrome.cast.ReceiverAvailability.AVAILABLE);
        receiverListener.reset();
        chrome.cast.mock.triggerReceiverUnavailable();
        expect(receiverListener).to.have.been.calledWith(chrome.cast.ReceiverAvailability.UNAVAILABLE);
    });

});
