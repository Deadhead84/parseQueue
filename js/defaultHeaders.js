var app = angular.module('parseQueue');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'FhZ43HMXZYWwQaazI3gnfffk1RI3azNsb4hOXfnD', 'X-Parse-REST-API-Key': 'b7p8bIxepYJTe85rFblqqCUKfQ9s55AdKaHWLdiv'};
            return config;
        }
    };
});