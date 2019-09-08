import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllCropsLayoutComponent } from './all-crops-layout/all-crops-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentsModule } from './../components/components.module';
import { AdminAddCropsLayoutComponent } from './admin-add-crops-layout/admin-add-crops-layout.component';
import { AdminCropDiseaseLayoutComponent } from './admin-crop-disease-layout/admin-crop-disease-layout.component';
import { UiCultivateComponent } from './ui-cultivate/ui-cultivate.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VegSellerUiComponent } from './veg-seller-ui/veg-seller-ui.component';
import { UiOrganicFoodComponent } from './ui-organic-food/ui-organic-food.component';
import { FarmerUIHomeComponent } from './farmer-ui-home/farmer-ui-home.component';
import { RouterModule } from '@angular/router';
import { SeedSellerUiComponent } from './seed-seller-ui/seed-seller-ui.component';
import { AdminDashboardUiComponent } from './admin-dashboard-ui/admin-dashboard-ui.component';
import { MoreDetailsUiComponent } from './more-details-ui/more-details-ui.component';

@NgModule({
    imports: [
      CommonModule,
      ComponentsModule,
      RouterModule,
      NgbModule.forRoot()
    ],
    schemas: [ NO_ERRORS_SCHEMA],
    declarations: [
      HeaderComponent,
      FooterComponent,
      AllCropsLayoutComponent,
      AdminAddCropsLayoutComponent,
      AdminCropDiseaseLayoutComponent,
      UiCultivateComponent,
      HomeUIComponent,
      VegSellerUiComponent,
      UiOrganicFoodComponent,
      FarmerUIHomeComponent,
      SeedSellerUiComponent,
      AdminDashboardUiComponent,
      MoreDetailsUiComponent],
    exports: [HeaderComponent,
      FooterComponent,
      AllCropsLayoutComponent,
      AdminAddCropsLayoutComponent,
      AdminCropDiseaseLayoutComponent,
      UiCultivateComponent,
      HomeUIComponent,
      UiOrganicFoodComponent,
      FarmerUIHomeComponent,
      VegSellerUiComponent,
      SeedSellerUiComponent,
      AdminDashboardUiComponent,
      MoreDetailsUiComponent]
  })
  export class UiModule { }
