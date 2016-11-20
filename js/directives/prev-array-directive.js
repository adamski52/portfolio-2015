/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the prev button for Skills, since it uses an array and not an interator.
*/

angular.module("App").directive("prevArray", function() {
    return {
        restrict: "A",
        scope: "@",
        link: function(scope, element, attrs) {
            element.bind("click", function() {
                scope.$apply(function() {
                    var item = scope.collection.pop();
                    scope.collection.unshift(item);
                });
            });
        }
    };
});