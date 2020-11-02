// (function(){
//   'use strict';
//   angular.module('LunchCheck', [])
//   .controller('LunchCheckController', LunchCheckController);
//   LunchCheckController.$inject = ['$scope'];
//   function LunchCheckController($scope){
//     $scope.dishes = '';
//     $scope.message = '';
//     $scope.checked = false;
//
//     $scope.checkLunch = function() {
//       if ($scope.dishes.trim().length === 0) {
//           $scope.empty = true;
//       } else {
//           $scope.checked = true;
//           $scope.empty = false;
//           var arrayDishes = $scope.dishes.split(',');
//           var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
//               return v.trim() !== '';
//           });
//
//           if (arrayDishesWithoutEmptys.length <= 3) {
//               $scope.message = 'Enjoy!';
//           } else {
//               $scope.message = 'Too much!';
//           }
//       }
//     };
//   };
// })();
(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.message="";
  $scope.state="";
  $scope.state2="";
  $scope.checkLunch=function () {

if($scope.dishes===undefined||$scope.dishes===""){
  $scope.message="please Enter Data First";
    $scope.state="red";
      $scope.state2="red";
}
else {
  let commaCal=$scope.dishes.split(",").length;
  if (commaCal>=1 && commaCal<=3) {
    $scope.message="Enjoy";

  }else {
    $scope.message="Too much";
}
  $scope.state="green";
    $scope.state2="green";
}
}
};
})();
