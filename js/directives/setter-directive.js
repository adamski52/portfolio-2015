/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the setter buttons as a shortcut for prev/next.
*/

angular.module("App").directive("setter", function() {
    return {
        restrict: "A",
        scope: "@",
        link: function(scope, element, attrs) {
            var s = scope.$parent; // we're in an ng-repeat, so go up.

            element.bind("click", function() {
                s.$apply(function() {
                    s.cur = attrs.setter;
                });
            });

            element.bind("mouseenter", function() {
                s.$apply(function() {
                    s.tooltip = s.collection[attrs.setter].title;
                });
            });

            element.bind("mouseleave", function() {
                s.$apply(function() {
                    s.tooltip = "";
                });
            }); 
        }
    }
});