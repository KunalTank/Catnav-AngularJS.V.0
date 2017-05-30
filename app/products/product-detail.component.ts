import { Component } from '@angular/core'

@Component({
    selector:'product-detail',
    templateUrl:'app/products/product-detail.component.html'    
})

export class ProductDetail{
product={
        productId:1,
        productName:'E Flex Drives',
        productDescription:'Universal (Contains 1 of each: Black, Red, Green, Yellow, Orange, Blue and White) ',
        imageURL :''
}
}