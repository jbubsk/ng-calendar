var angular = require('angular');

angular.module('header')
    .directive('navItems', function () {
        return {
            restriction: 'A',
            replace: true,
            scope: {
                navigs: '=navItems'
            },
            templateUrl: require('./dir-menuNavigation.html'),
            controller: function ($scope, $rootScope, $location) {

                function handleNavigationMenu(resolve) {
                    $scope.navigs.forEach(function (nav) {
                        nav.isActive = resolve(nav);
                    });
                }

                $rootScope.$on('$stateChangeStart', function (event, toState) {
                    handleNavigationMenu(function setActive(nav) {
                        return toState.name === nav.href;
                    });
                });
                handleNavigationMenu(function setActive(nav) {
                    return $location.path().indexOf(nav.href) > -1;
                });
            }
        }
    });