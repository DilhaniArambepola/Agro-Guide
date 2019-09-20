import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropsComponent } from './crops/crops.component';
import { AdminManageCropsComponent } from './admin-manage-crops/admin-manage-crops.component';
import { CropDiseaseComponent } from './crop-disease/crop-disease.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CultivateVegetablesComponent } from './cultivate-vegetables/cultivate-vegetables.component';
import { OrganicFoodSellerComponent } from './organic-food-seller/organic-food-seller.component';
import { AlertComponent } from './alert/alert.component';
import { FarmerHomeComponentComponent } from './farmer-home-component/farmer-home-component.component';
import { VegSellerProfileComponent } from './veg-seller-profile/veg-seller-profile.component';
import { SeedSellerProfileComponent } from './seed-seller-profile/seed-seller-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MoreDetailsComponentComponent } from './more-details-component/more-details-component.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      NgbModule.forRoot()
    ],
    schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    // tslint:disable-next-line:max-line-length
    declarations: [
        CropsComponent,
        AdminManageCropsComponent,
        CropDiseaseComponent,
        CultivateVegetablesComponent,
        OrganicFoodSellerComponent,
        AlertComponent,
        FarmerHomeComponentComponent,
        VegSellerProfileComponent,
        SeedSellerProfileComponent,
        AdminDashboardComponent,
        MoreDetailsComponentComponent
    ],
    exports: [
        CropsComponent,
        AdminManageCropsComponent,
        CropDiseaseComponent,
        CultivateVegetablesComponent,
        OrganicFoodSellerComponent,
        AlertComponent,
        VegSellerProfileComponent,
        SeedSellerProfileComponent,
        AdminDashboardComponent,
        MoreDetailsComponentComponent,
        FarmerHomeComponentComponent
    ]
  })
  export class ComponentsModule { }
