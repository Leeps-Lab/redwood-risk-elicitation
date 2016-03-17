riskElicitation.controller("reStartCtrl",
["$scope", "RedwoodSubject",
function ($scope, rs) {
  var kRevealedPreferences = "RevealedPreferences";
  var kHoltLaury = "HoltLaury";
  var kPortfolioAllocation = "PortfolioAllocation";
  var karrowSecurities = "ArrowSecurities";

  var _views = {};
  _views[kRevealedPreferences] = "/static/experiments/redwood-revealed-preferences/start.html";
  _views[kHoltLaury] = "/static/experiments/redwood-holt-laury/start.html";
  _views[kPortfolioAllocation] = "/static/experiments/redwood-portfolio-allocation/html/start.html";
  _views[karrowSecurities] = "/static/experiments/redwood-arrow-securities/start.html";

  var _css = {};
  _css[kRevealedPreferences] = [
    "/static/experiments/redwood-revealed-preferences/start.css"
  ];
  _css[kHoltLaury] = [
    "/static/experiments/redwood-holt-laury/start.css"
  ];
  _css[kPortfolioAllocation] = [
    "/static/experiments/redwood-portfolio-allocation/css/start.css"
  ];
  _css[karrowSecurities] = [
    "/static/experiments/redwood-arrow-securities/start.css";
  ];

  $scope.ready = false;
  $scope.viewToLoad = null;
  $scope.cssToLoad = null;

  rs.on_load(function() {
    $scope.viewToLoad = _views[rs.config.view];
    $scope.cssToLoad = _css[rs.config.view];
    $scope.ready = true;
  });

  $scope.viewLoaded = function() {
    // hack to call child rs.on_load callbacks
    // since redwood does not call on_load callbacks
    // registered after it has already loaded
    while (rs._on_load_callbacks.length) {
        (rs._on_load_callbacks.shift())();
    }
  }

}]);
