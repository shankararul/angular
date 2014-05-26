
  var app=angular.module("MyApp",[]);

  app.controller("MyCtrl", function($scope){
    $scope.name="Peter";
    $scope.user={
      name:"parker"
    };
  });

  app.controller("MyNestedCtrl", function($scope){

  });

  app.factory("UserService", function(){
    var users=["peter","Dina","nino"];

    return {
      all:function(){
        return users;
      },
      first:function(){
        return users[0];
      }
    };
  });

app.controller("MyServiceCtrl", function($scope,UserService){
  $scope.users=UserService.all();
});

app.controller("anotherServiceCtrl", function($scope,UserService){
  $scope.firstUser=UserService.first();
});

app.directive("myWidget",function(){
  var linkFn=function(scope,element,attributes){
    var paragraph=element.children()[0];
    $(paragraph).on("click",function(){
      $(this).css({"background-color":"red"});
    });
  };
  
  return {
    restrict: "A",
    link:linkFn
  };
});

app.directive("myWidgeter", function(){
  return {
    restrict:"E",
    template:"<h1>Created myself through Directive</h1>"
  };
});

app.directive("myAnotherwidg", function(){
  return {
    restrict : "A",
    transclude: true,
    template: "<div ng-transclude><h3>Transcluding myself</h3></div>"
  };
});

app.directive("text", function(){
  return {
    restrict: "A",
    template: "<h1>{{text}}</h1>",
    scope:{
      text:"@text"
    }
  };
});
