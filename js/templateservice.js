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
    { firstname: "Chintan", lastname: "Shah", id: "M0001", salary: 1000000 },
    { firstname: "Chirag", lastname: "Shah", id: "M0002", salary: 1000000 },
    { firstname: "Naman", lastname: "Gadhani", id: "M0003", salary: 1000000 },
    { firstname: "Jagruti", lastname: "Shah", id: "C0001", salary: 1000000 },
    { firstname: "Abhishek", lastname: "Shah", id: "C0002", salary: 1000000 },
    { firstname: "Pratik", lastname: "Shah", id: "C0003", salary: 2000000 }
  ];

  this.employeeIdValidation = function(form) {
    if (form.id && form.id.length > 5) {
      form.id = form.id.slice(0, 5);
    }
    var obj = _.find(this.employeeData, function(n) {
      return n.id == form.id;
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
