riskElicitation.controller("reFinishCtrl", ["$scope", "RedwoodSubject", function($scope, rs) {
    $scope.shouldShow = {
        "RevealedPreferences": false,
        "PortfolioAllocation": false,
        "HoltLaury": false
    }

    rs.on_load(function() {
        // Determine table visibility based on configuration
        // If an experiment view appears in the configuration,
        // then the corresponding payout table should be shown
        for (key in $scope.shouldShow) {
            $scope.shouldShow[key] = rs.configs.filter(function(config) {
                return config.view === key;
            }).length > 0;
        }
    })
}]);
