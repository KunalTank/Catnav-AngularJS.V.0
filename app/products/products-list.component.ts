import {Component} from "@angular/core"
//import {ProductsAppComponent} from "../products-app.component"

@Component({
    selector:'products-list',
    templateUrl:'app/products/products-list.component.html'
})

export class ProductsList
{
    products = [{
        productId:1,
        productName:'E Flex Drives',
        productDescription:'Universal (Contains 1 of each: Black, Red, Green, Yellow, Orange, Blue and White) ',
        imageURL :''
    },
    {
        productId:2,
        productName:'S Flex Drives',
        productDescription:'S Flex Drives & S Flex Drives',
        imageURL :''    
    },
    {
        productId:3,
        productName:'M Flex Series',
        productDescription:'Azure Tech Days',
        imageURL :''    
    }]
}
