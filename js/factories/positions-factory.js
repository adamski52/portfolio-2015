/* I know this should be minified and in a single file, but since this is a portfolio site
   and since you are most likely some kind of recruiter, I thought it was beneficial to let
   the code remain in a readable state.

   This module provides a singleton that we can share between directives to track the position
   of each section.  They will change based on content and screen size, and so it updates
   frequently.  Each section has this injected as a dependency.
*/

angular.module("App").factory("positions", function() {
    return {};
});