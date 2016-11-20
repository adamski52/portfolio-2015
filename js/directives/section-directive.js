/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This is the meat of the site.  Each main piece of the site is a Section, driven by
   the code below in addition to anything found in the particular section's controller.
   Since the order of operations is ng-controller > directive.controller > directive.link,
   we can (and should) fetch the data in an ng-controller, set up anything used in the view
   (the HTML) in directive.controller (that's why isCurrent is in controller()), and set up
   anything that occurs "normally" in link.
*/

angular.module("App").directive("section", ["positions", function(positions) {
    return {
        restrict: "A",
        scope: true,
        controller: function($scope) {
            $scope.cur = 0;

            $scope.isCurrent = function(i) {
                return $scope.cur == i;
            };
        },
        link: function(scope, element, attrs) {
            scope.updatePosition = function() {
                
                // contact's top may not be able to be reached since it's at the bottom.
                // force it to have a larger window.
                if(attrs.section == "contact") {
                    var wrapperHeight = document.getElementById("wrapper").offsetHeight;
                    positions.contact = {
                        top: wrapperHeight - window.innerHeight,
                        bottom: wrapperHeight
                    };
                    return;
                }


                positions[attrs.section] = {
                    top: element[0].offsetTop,
                    bottom: element[0].offsetTop + element[0].offsetHeight
                };
            };

            angular.element(window).bind("resize", function() {
                scope.updatePosition();
            });
            angular.element(window).bind("scroll", function() {
                scope.updatePosition();
            });
            scope.updatePosition();
        }
    };
}]);