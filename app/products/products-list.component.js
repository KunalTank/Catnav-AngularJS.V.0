"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//import {ProductsAppComponent} from "../products-app.component"
var ProductsList = (function () {
    function ProductsList() {
        this.products = [{
                productId: 1,
                productName: 'E Flex Drives',
                productDescription: 'Universal (Contains 1 of each: Black, Red, Green, Yellow, Orange, Blue and White) ',
                imageURL: ''
            },
            {
                productId: 2,
                productName: 'S Flex Drives',
                productDescription: 'S Flex Drives & S Flex Drives',
                imageURL: ''
            },
            {
                productId: 3,
                productName: 'M Flex Series',
                productDescription: 'Azure Tech Days',
                imageURL: ''
            }];
    }
    return ProductsList;
}());
ProductsList = __decorate([
    core_1.Component({
        selector: 'products-list',
        templateUrl: 'app/products/products-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], ProductsList);
exports.ProductsList = ProductsList;
//# sourceMappingURL=products-list.component.js.map