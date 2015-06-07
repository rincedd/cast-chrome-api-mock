var ReceiverAvailability = require('./receiver_availability');

var sessionListener, receiverListener;

var CastMock = {
    setSessionListener: function(listener) {
        sessionListener = listener;
    },
    setReceiverListener: function(listener) {
        receiverListener = listener;
    },
    triggerReceiverAvailable: function() {
        if (typeof receiverListener === 'function') {
            receiverListener(ReceiverAvailability.AVAILABLE);
        }
    },
    triggerReceiverUnavailable: function() {
        if (typeof receiverListener === 'function') {
            receiverListener(ReceiverAvailability.UNAVAILABLE);
        }
    }
};

module.exports = CastMock;
