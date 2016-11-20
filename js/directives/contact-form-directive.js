/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the Contact form.
*/

angular.module("App").directive("contactForm", ["services", function(services) {
    return {
        restrict: "A",
        scope: "@",
        link: function(scope, element, attrs) {
            scope.msg = {};

            scope.reset = function() {
                scope.hasError = false;
                scope.hasNameError = false;
                scope.hasEmailError = false;
                scope.hasMessageError = false;
                scope.postFail = false;
                scope.postSuccess = false;
            };
            scope.reset();

            element.bind("submit", function(e) {
                e.preventDefault();

                scope.$apply(function() {
                    scope.reset();
                    if(scope.msg.name && scope.msg.email && scope.msg.message) {
                        services.post("contact", scope.msg).then(function(data) {
                            scope.postSuccess = true;
                        }, function(data) {
                            scope.hasError = true;
                            scope.postFail = true;
                        });
                    }
                    else {
                        if(!scope.msg.name) {
                            scope.hasNameError = true;
                        }

                        if(!scope.msg.email) {
                            scope.hasEmailError = true;
                        }

                        if(!scope.msg.message) {
                            scope.hasMessageError = true;
                        }
                        scope.hasError = true;
                    }
                });

                return false;
            });
        }
    };
}]);