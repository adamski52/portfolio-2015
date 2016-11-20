/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the data connection for the Skills section.
*/

angular.module("App").controller("skillsCtrl", ["$scope", "services", function($scope, services) {
    services.get("skills").then(function(data) {
        $scope.collection = data.items;
        $scope.intro = data.intro;
    }, function(data) {
        window.location = "oh-no.html";
    });
}]);