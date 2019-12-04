angular
  .module("phonecatControllers", [
    "templateservicemod",
    "navigationservice",
    "ui.bootstrap"
  ])

  .controller("HomeCtrl", function (
    $scope,
    TemplateService,
    NavigationService,
    $state
  ) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.searchData = {};
    $scope.totalSalary = _.sumBy($scope.template.employeeData, function (n) {
      return n.salary;
    });
    $scope.deleteEmployee = function (employeeId) {
      _.remove($scope.template.employeeData, function (n) {
        return employeeId == n.id;
      });
    };
    $scope.editEmployee = function (employeeId) {
      $state.go("edit", {
        id: employeeId
      });
    };
  })

  .controller("AddCtrl", function (
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
    $scope.addEmployee = function () {
      $scope.formData.id = $scope.formData.idIni + $scope.formData.id;
      $scope.template.employeeData.push($scope.formData);
      $state.go("home");
    };
  })

  .controller("EditCtrl", function (
    $scope,
    TemplateService,
    NavigationService,
    $state,
    $stateParams
  ) {
    $scope.template = TemplateService.changecontent("edit"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Edit"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formData = _.find($scope.template.employeeData, function (n) {
      return n.id == $stateParams.id;
    });
    $scope.editEmployee = function () {
      _.each($scope.template.employeeData, function (n) {
        if (n.id == $stateParams.id) {
          n = $scope.formData;
        }
      });
      $state.go("home");
    };
  })

  .controller("headerctrl", function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on("$stateChangeSuccess", function (
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {

    });
  });