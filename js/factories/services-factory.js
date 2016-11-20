/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module handles the JSON data that is fed in.  Why load the JSON and not just hardcode it,
   if it's not actually dynamic?  Because it's a portfolio site, and it's important to show
   this functionality instead of hardcoding what would typically be dynamic data.
*/

angular.module("App").factory("services", ["$q", "$http", function($q, $http) {
    var base = "services/",
        urls = {
            nav: base + "nav.json",
            about: base + "about.json",
            skills: base + "skills.json",
            work: base + "work.json",
            clients: base + "clients.json",
            contact: base + "contact.php"
        };

    return {
        get: function(base) {
            var dfd = $q.defer();
            $http.get(urls[base]).success(function(data) {
                dfd.resolve(data);
            }).error(function(data) {
                dfd.reject(data);
            });
            return dfd.promise;
        },
        post: function(base, data) {
            var dfd = $q.defer();
            $http.post(urls[base], data).success(function(data) {
                dfd.resolve(data);
            }).error(function(data) {
                dfd.reject(data);
            });
            return dfd.promise;
        }
    };
}]);