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
var ProductDetail = (function () {
    function ProductDetail() {
        this.product = {
            productId: 1,
            productName: 'E Flex Drives',
            productDescription: 'Universal (Contains 1 of each: Black, Red, Green, Yellow, Orange, Blue and White) ',
            imageURL: ''
        };
    }
    return ProductDetail;
}());
ProductDetail = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: 'app/products/product-detail.component.html'
    }),
    __metadata("design:paramtypes", [])
], ProductDetail);
exports.ProductDetail = ProductDetail;
//# sourceMappingURL=product-detail.component.js.map