/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the Dropdown nav that shows in the Work area on smaller screens.
*/

angular.module("App").directive("navDropdown", function() {
    return {
        restrict: "A",
        scope: "@",
        link: function(scope, element, attrs) {
            scope.$watch("cur", function(newVal, oldVal) {
                element[0].selectedIndex = newVal;
            });

            element.bind("change", function(e) {
                scope.$apply(function() {
                    scope.cur = element[0].value;
                });
            });
        }
    };
});