import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';


export const routes: Routes = [
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'search/:keyword', component: ProductListComponent},
    {path: 'category/:id/:name', component: ProductListComponent },
    {path: 'category', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'}
];