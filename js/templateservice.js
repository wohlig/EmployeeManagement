var templateservicemod = angular.module("templateservicemod", []);
templateservicemod.service("TemplateService", function() {
  this.title = "";
  this.meta = "";
  this.metadesc = "";

  this.employeeData = [
    { firstname: "Chintan", lastname: "Shah", id: "m1", salary: 1000000 },
    { firstname: "Chirag", lastname: "Shah", id: "m2", salary: 1000000 },
    { firstname: "Naman", lastname: "Gadhani", id: "m3", salary: 1000000 },
    { firstname: "Jagruti", lastname: "Shah", id: "c1", salary: 1000000 },
    { firstname: "Abhishek", lastname: "Shah", id: "c2", salary: 1000000 },
    { firstname: "Pratik", lastname: "Shah", id: "c3", salary: 2000000 }
  ];

  this.employeeIdValidation = function(form) {
    if (form.id && form.id.length > 5) {
      form.id = form.id.slice(0, 5);
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
