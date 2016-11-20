/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the animations that happen throughout the site.
*/

angular.module("App").directive("divider", ["positions", function(positions) {
    return {
        restrict: "A",
        scope: true,
        link: function(scope, element, attrs) {
            scope.play = function() {
                element.addClass("play");
            };

            scope.restart = function() {
                element.removeClass("play");
            };

            var top;
            angular.element(window).bind("scroll", function() {
                top = element[0].offsetTop;
                if(attrs.id == "contact") {
                    top -= window.innerHeight;
                }

                if(window.pageYOffset >= top) {
                    scope.play();
                }
                else {
                    scope.restart();
                }
            });
        }
    };
}]);