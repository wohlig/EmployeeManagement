var templateservicemod = angular.module("templateservicemod", []);
templateservicemod.service("TemplateService", function() {
  this.title = "";
  this.meta = "";
  this.metadesc = "";
  this.departments = [
    "Chief Officers",
    "Developers",
    "Marketing",
    "Senior Developer"
  ];

  this.employeeData = [
    {
      firstname: "Chintan",
      lastname: "Shah",
      id: "M0001",
      salary: 1000000,
      department: "Marketing"
    },
    {
      firstname: "Chirag",
      lastname: "Shah",
      id: "M0002",
      salary: 1000000,
      department: "Marketing"
    },
    {
      firstname: "Naman",
      lastname: "Gadhani",
      id: "M0003",
      salary: 1000000,
      department: "Marketing"
    },
    {
      firstname: "Jagruti",
      lastname: "Shah",
      id: "C0001",
      salary: 1000000,
      department: "Chief Officers"
    },
    {
      firstname: "Abhishek",
      lastname: "Shah",
      id: "C0002",
      salary: 1000000,
      department: "Chief Officers"
    },
    {
      firstname: "Pratik",
      lastname: "Shah",
      id: "C0003",
      salary: 2000000,
      department: "Chief Officers"
    }
  ];

  this.createId = function(form) {
    form.idIni = form.department.slice(0, 1);
  };
  this.employeeIdValidation = function(form) {
    if (!_.isEmpty(form.id)) {
      var trueString = "";
      var numbers = form.id.slice(0, 4);
      _.each(numbers, function(n) {
        if (!_.isNaN(parseInt(n))) {
          trueString += n;
        }
      });
      form.id = trueString;
    }
    if (form.id && form.id.length > 4) {
      form.id = form.id.slice(0, 4);
    }
    var obj = _.find(this.employeeData, function(n) {
      return n.id == form.idIni + form.id;
    });
    if (obj) {
      form.id = "";
    }
  };

  var d = new Date();
  this.year = d.getFullYear();

  this.init = function() {
    this.header = "views/header.html";
    this.menu = "views/menu.html";
    this.content = "views/content/content.html";
    this.footer = "views/footer.html";
  };

  this.changecontent = function(page) {
    this.init();
    var data = this;
    data.content = "views/content/" + page + ".html";
    return data;
  };

  this.init();
});
