

import { NgModule } from '@angular/core'
import{ BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import{ ProductsAppComponent } from './products-app.component'
import{ ProductsList } from './products/products-list.component'
import{ProductDetail} from './products/product-detail.component'


const appRoutes: Routes = [
    //{ path: '',    redirectTo: 'products', pathMatch: 'full'  },
    { path: 'products', component: ProductsList  },
    {path:'product/:id',component:ProductDetail}
];

@NgModule({
imports:[BrowserModule,RouterModule.forRoot(appRoutes)],
declarations:[ProductsAppComponent,ProductsList,ProductDetail],
bootstrap:[ProductsAppComponent]
})

export class AppModule{

}

 