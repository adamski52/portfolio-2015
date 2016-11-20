/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the data connection for the Work section.  It also sets up some items
   specific to Work that should not pollute the scope of the other directives.
*/

angular.module("App").controller("workCtrl", ["$scope", "$sce", "services", function($scope, $sce, services) {
    $scope.modal = false;
    $scope.isModalOpen = function() {
        return $scope.modal;
    };

    $scope.getModalURL = function() {
        if($scope.collection) {    
            var obj = $scope.collection[$scope.cur];
            if(obj && obj.modalURL) {
                return $sce.trustAsResourceUrl($scope.collection[$scope.cur].modalURL);
            }
        }

        return "";
    };

    services.get("work").then(function(data) {
        $scope.collection = data;
    }, function(data) {
        window.location = "oh-no.html";
    });
}]);