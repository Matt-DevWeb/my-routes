import { Routes } from '@angular/router';
import { HomeComponent } from './components/components/home/home.component';
import { ContactComponent } from './components/components/contact/contact.component';
import { ProductComponent } from './components/components/product/product.component';
import { ErrorComponent } from './components/components/error/error.component';
import { ProductDetailComponent } from './components/components/product-detail/product-detail.component';
// Define the routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
