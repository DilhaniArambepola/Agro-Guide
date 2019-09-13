import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCropsComponent } from './all-crops/all-crops.component';
import { AdminAddCropsComponent } from './admin-add-crops/admin-add-crops.component';
import { AdminCropDiseaseComponent } from './admin-crop-disease/admin-crop-disease.component';
import { CultivateComponent } from './cultivate/cultivate.component';
import { HomeComponent } from './home/home.component';
import { OrganicFoodComponent } from './organic-food/organic-food.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VegSellerComponent} from './veg-seller/veg-seller.component';
import { SeedSellerComponent } from './seed-seller/seed-seller.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuardsService } from './guards/role-guards.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MoreDetailsComponent } from './more-details/more-details.component';

const routes: Routes = [
  { path: 'cropdetails', component: AllCropsComponent },
  { path: 'cultivate', component: CultivateComponent },
  { path: 'organicFood', component: OrganicFoodComponent},
  { path: 'home', component: HomeComponent },
  { path: 'admindashboard', component: AdminDashboardComponent, canActivate: [RoleGuardsService], data: {role: 'Admin'} },
  { path: 'farmer-home', component: FarmerHomeComponent, canActivate: [RoleGuardsService], data: {role: 'Farmer'}},
  { path: 'admindashboard/manageCrops', component: AdminAddCropsComponent, canActivate: [RoleGuardsService], data: {role: 'Admin'} },
  { path: 'admindashboard/moreDetails', component: MoreDetailsComponent },
  // tslint:disable-next-line:max-line-length
  { path: 'admindashboard/manageCropDisease', component: AdminCropDiseaseComponent, canActivate: [RoleGuardsService], data: {role: 'Admin'} },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'veg-seller-home', component: VegSellerComponent, canActivate: [RoleGuardsService], data: {role: 'Food seller'}  },
  { path: 'seed-seller-home', component: SeedSellerComponent, canActivate: [RoleGuardsService], data: {role: 'Seed seller'}  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
