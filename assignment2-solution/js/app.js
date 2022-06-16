(function (){
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
       var firstController = this;
       firstController.returnList = ShoppingListCheckOffService.getToBuyList();
       firstController.moveItem = function(itemIndex){
        ShoppingListCheckOffService.moveItem(itemIndex);
    };
}
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var secondController = this;
        secondController.getBoughtList = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyList = [
            {
                name: "Cookies",
                quantity: 2
            },
            {
                name: "Cookies",
                quantity: 4
            },
            {
                name: "Cookies",
                quantity: 6
            },
            {
                name: "Cookies",
                quantity: 8
            },
            {
                name: "Cookies",
                quantity: 10
            },
        ];

        var boughtList = [];

        service.moveItem = function(itemIndex){
            boughtList.push(toBuyList[itemIndex]);
            toBuyList.splice(itemIndex, 1)
        }

        service.getToBuyList = function(){
            return toBuyList;
        }
        service.getBoughtList = function(){
            return boughtList;
        }


    }


})();