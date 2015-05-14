"use strict";

function NavItems($rootScope, $location) {
    return {
        restriction: 'A',
        replace: true,
        scope: {
            navigs: '=navItems'
        },
        templateUrl: 'modules/header/dir_tmpl_nav.html',
        link: function ($scope) {

            function handleNavigationMenu(resolve) {
                $scope.navigs.forEach(function (nav) {
                    nav.isActive = resolve(nav);
                });
            }

            $rootScope.$on('$stateChangeStart', function (event, toState) {
                handleNavigationMenu(function setActive(nav) {
                    return toState.name.indexOf(nav.href) > -1;
                });
            });
            handleNavigationMenu(function setActive(nav) {
                return $location.path().indexOf(nav.href) > -1;
            });
        }
    }
}
NavItems.$inject = ["$rootScope", "$location"];

module.exports = NavItems;