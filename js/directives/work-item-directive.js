/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the launch button for each Work item.
*/

angular.module("App").directive("workItem", function() {
    return {
        restrict: "A",
        scope: "@",
        link: function(scope, element, attrs) {
            var s = scope.$parent;

            element.bind("click", function() {
                var proj = s.collection[attrs.workItem];

                // smaller than this, youre likely on a mobile.  don't do modals on mobile.
                if(proj.modalURL && window.innerWidth > 768) {
                    s.$apply(function() {
                        s.modal = true;
                    });
                } else if(proj.url) {
                    window.open(proj.url);
                }
            });
        }
    }
});