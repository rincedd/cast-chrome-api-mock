var AutoJoinPolicy = require('./auto_join_policy'),
    DefaultActionPolicy = require('./default_action_policy');

var ApiConfig = function(sessionRequest, sessionListener, receiverListener, opt_autoJoinPolicy, opt_defaultActionPolicy) {
    this.sessionRequest = sessionRequest;
    this.sessionListener = sessionListener;
    this.receiverListener = receiverListener;
    this.autoJoinPolicy = opt_autoJoinPolicy || AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    this.defaultActionPolicy = opt_defaultActionPolicy || DefaultActionPolicy.CREATE_SESSION;
};

module.exports = ApiConfig;
