angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, Places) {
    })


    .controller('FriendsCtrl', function ($scope, Places) {
        $scope.locations = Places.all();

        $scope.orderProp = '-dateAdded';

    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Places, $ionicModal) {
        // Places.get($stateParams.locationId)
        //users is an array of user objects
        $scope.location = Places.get($stateParams.locationId);

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

    })

    .controller('AccountCtrl', function ($scope) {

        var map = L.map('map').setView([40.274274, -111.692505], 14);
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tiles.mapbox.com/v3/jakerstf.kf18f1d5/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; ' + mapLink,
                maxZoom: 18
            }).addTo(map);
        new L.Marker(new L.LatLng(40.274274, -111.692505))
            .addTo(map)
            .bindPopup("<b>Car Dealer</b><br>Search: cars, auto, dealer...")
            .openPopup();

        new L.Marker(new L.LatLng(40.280747, -111.726172))
            .addTo(map)
            .bindPopup("<b>Orem Train Station</b><br>Search: train, tracks, station...")
            .openPopup();

        new L.Marker(new L.LatLng(40.273841, -111.753101))
            .addTo(map)
            .bindPopup("<b>Utah Lake</b><br>Search: lake, utah, water...")
            .openPopup();

        new L.Marker(new L.LatLng(40.279199, -111.711050))
            .addTo(map)
            .bindPopup("<b>UVU</b><br>Search: university, school, education...")
            .openPopup();


        map.locate({setView: true, maxZoom: 15});

        map.on('locationfound', onLocationFound);

        function onLocationFound(e) {
            // create a marker at the users "latlng" and add it to the map
            L.marker(e.latlng).addTo(map);
        }


    })

    .controller('AddCtrl', function ($scope) {
    });


