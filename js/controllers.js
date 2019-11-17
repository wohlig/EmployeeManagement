angular
  .module("phonecatControllers", [
    "templateservicemod",
    "navigationservice",
    "ui.bootstrap",
    "ngSanitize"
  ])

  .controller("HomeCtrl", function(
    $scope,
    TemplateService,
    NavigationService,
    $timeout
  ) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.searchData = {};
    $scope.deleteEmployee = function(employeeId) {
      _.remove($scope.template.employeeData, function(n) {
        return employeeId == n.id;
      });
    };
  })

  .controller("AddCtrl", function(
    $scope,
    TemplateService,
    NavigationService,
    $state
  ) {
    $scope.template = TemplateService.changecontent("add"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Add"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formData = {};
    $scope.addEmployee = function() {
      $scope.template.employeeData.push($scope.formData);
      $state.go("home");
    };
  })

  .controller("headerctrl", function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on("$stateChangeSuccess", function(
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {
      $(window).scrollTop(0);
    });
  });
