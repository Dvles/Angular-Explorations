import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { MainExosComponent } from './components/main-exos/main-exos.component';
import { SharedModule } from '../shared/shared.module';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopAddProductComponent } from './components/shop-add-product/shop-add-product.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopV2Component } from './components/shop-v2/shop-v2.component';
import { ShopV2AddProductComponent } from './components/shop-v2-add-product/shop-v2-add-product.component';
import { ShopV2ListComponent } from './components/shop-v2-list/shop-v2-list.component';


@NgModule({
  declarations: [
    MainExosComponent,
    ExoChronoComponent,
    ShopComponent,
    ShopAddProductComponent,
    ShopListComponent,
    ShopV2Component,
    ShopV2AddProductComponent,
    ShopV2ListComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    SharedModule
  ]
})
export class ExercicesModule { }
