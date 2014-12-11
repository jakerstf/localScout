angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

    .factory('Places', function($http) {
    // Might use a resource here that returns a JSON array

    // Adding http request to load json file
    var places = [];
    $http.get('Locations/places.json').success(function(data){
        places = data;
    });

    return {
        all: function() {
            return places;
        },
        get: function(locationId) {
            // Simple index lookup
            return places[locationId];
        }
    }
});

