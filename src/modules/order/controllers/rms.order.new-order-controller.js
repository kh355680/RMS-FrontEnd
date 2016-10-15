(function () {
    'use strict';

    angular
        .module('rms.order')
        .controller('rms.order.controller', constructor);

    function constructor(rmsOrderService) {

        var vm = this;

        vm.orderViewModel = {
            orderItems: [],
            total:0
        }

        function init() {
            console.log('rms.order.controller activated');
            getFoodCategories();
        }

        init();

        function getFoodCategories() {
            rmsOrderService.
                getFoodCategories()
                .then(function(response) {
                    console.log(response);
                    vm.foodCategories = response.data.Data;
                },function(error) {
                    console.log(error);
                });
        }

        function getFoodItemsByFoodCategoryId(foodCategoryId) {
            
            rmsOrderService.
                getFoodItemsByFoodCategoryId(foodCategoryId)
                .then(function (response) {
                    console.log(response);
                    vm.selectedFoodItemsViewModel = [];
                    //vm.selectedFoodItems = response.data.Data;
                    response.data.Data.forEach(function(foodItem) {

                        var selectedFoodItemsViewModel = {
                            id: foodItem.Id,
                            name: foodItem.Name,
                            rate: foodItem.Rate,
                            quantity:0
                        }

                        vm.selectedFoodItemsViewModel.push(selectedFoodItemsViewModel);
                    });

                }, function (error) {
                    console.log(error);
                });
        }

        vm.getFoodItemsByFoodCategoryId = getFoodItemsByFoodCategoryId;

        vm.itemAddToOrder = function (selectedFoodItem) {
            vm.orderItemViewModel = {
                id: selectedFoodItem.id,
                name: selectedFoodItem.name,
                quantity: selectedFoodItem.quantity,
                total: selectedFoodItem.quantity * selectedFoodItem.rate
            }

            vm.orderViewModel.total += vm.orderItemViewModel.total;
            console.log(vm.orderItemViewModel);
            vm.orderViewModel.orderItems.push(vm.orderItemViewModel);
            console.log(vm.orderViewModel);
        }

    }

    constructor.$inject = ['rmsOrderService'];

})()