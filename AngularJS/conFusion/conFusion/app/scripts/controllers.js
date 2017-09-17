'use strict';
/*Inject the service into this controller, because this controller needs that service in order to function menuFactory*/ 
angular.module('confusionApp')
.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails = false;
  $scope.showMenu = false;
  $scope.message = "Loading ...";

  $scope.dishes = {};
  menuFactory.getDishes()
  .then(
    function(response){
      $scope.dishes = response.data;
      $scope.showMenu = true;
    },
    function(response){
      $scope.message = "Error: " + response.status + " " + response.statusText;
    }
  );  
    
  $scope.select = function(setTab) {
    $scope.tab = setTab;
    
    if (setTab === 2) {
      $scope.filtText = "appetizer";
    } 
    else if (setTab === 3) {
      $scope.filtText = "mains";
    }
    else if (setTab === 4) {
      $scope.filtText = "dessert";
    }
    else {
      $scope.filtText = "";
    }
  };
  
  $scope.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };

  $scope.toggleDetails = function(){
    $scope.showDetails = !$scope.showDetails;
  }
}])

.controller('ContactController', ['$scope', function($scope) {
  
  $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
  var channels = [{value:"tel", label:"Tel."}, 
                  {value:"Email",label:"Email"}];
  $scope.channels = channels;
  $scope.invalidChannelSelection = false;
}])
  
.controller('FeedbackController', ['$scope', function($scope) {
  $scope.sendFeedback = function() {
          console.log($scope.feedback);
          if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        }
        else {
            $scope.invalidChannelSelection = false;
            $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                               agree:false, email:"" };
            $scope.feedback.mychannel="";

            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        }
      };
}])

.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
  
  $scope.dish = {};
  $scope.showDish = false;
  $scope.message = "Loading ...";

  menuFactory.getDish(parseInt($stateParams.id, 10))
  .then(
    function(response){
      $scope.dish = response.data;
    }
  );
}])

.controller('DishCommentController', ['$scope', function($scope) {
    
    var comment = {"rating":"", "comment":"", "author":"", "date":""};            
    $scope.dishComment = {"rating":5, "comment":"", "author":"", "date":""};
    $scope.submitComment = function () {       
        
        console.log($scope.dishComment);
        $scope.dishComment.date = new Date();
        // Step 3: Push your comment into the dish's comment array
        $scope.dish.comments.push($scope.dishComment);
        
        //Step 4: reset your form to pristine
        
        $scope.commentForm.$setPristine();
        $scope.dishComment = {"rating":5, "comment":"", "author":"", "date":""};
        //Step 5: reset your JavaScript object that holds your comment
    };
}])

// implement the IndexController and About Controller here

.controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory){
  $scope.dish = {};
  $scope.showDish = false;
  $scope.message = "Loading ...";

  menuFactory.getDish(0)
  .then(
    function(response){
      $scope.dish = response.data;
      $scope.showDish = true;
  },
    function(response){
      $scope.message = "Error: " + response.status + " " + response.statusText;
  });

  var promotion = menuFactory.getPromotion(0);
  $scope.promotion = promotion;

  var specialist = corporateFactory.getLeader(3);
  $scope.specialist = specialist;

}])

.controller('AboutController', ['$scope', 'corporateFactory',  function($scope, corporateFactory){

  $scope.leaders = corporateFactory.getLeaders();

}])

;