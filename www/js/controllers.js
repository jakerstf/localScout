angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendsCtrl', function($scope, $http) {
  $http.get('Locations/places.json').success(function(data){
  $scope.locations = data;
  });

  $scope.orderProp = 'dateListed';
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('AddCtrl', function($scope) {
});


