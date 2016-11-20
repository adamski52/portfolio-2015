/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the Nav section.
*/

angular.module("App").directive("nav", ["positions", function(positions) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            scope.activeItem = "";
            scope.toggleMenu = function() {
                element.toggleClass("open");
            };

            scope.isActive = function(id) {
                return scope.activeItem == id;
            };

            scope.testItem = function(item) {
                return window.pageYOffset >= item.top && window.pageYOffset <= item.bottom;
            };

            angular.element(window).bind("scroll", function() {

                // contact, being at the bottom, may overlap the one before it.  force a test of it first.
                // i hear what you're saying - just run the iterator in reverse.  can't.  it's an object.
                // and object order is not guarnteed in javascript.

                if(scope.testItem(positions.contact)) {
                    scope.$apply(function() {
                        scope.activeItem = "contact";
                    });
                    return;
                }

                for(var p in positions) {
                    if(scope.testItem(positions[p])) {
                        scope.$apply(function() {
                            scope.activeItem = p;
                        });
                    }
                }
            });
        }
    };
}]);