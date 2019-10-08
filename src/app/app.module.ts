import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// service imports


import { AlertComponent } from './components/alert/alert.component';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCropsComponent } from './all-crops/all-crops.component';

import { UiModule } from './ui/ui.module';
import { AdminAddCropsComponent } from './admin-add-crops/admin-add-crops.component';
import { AdminCropDiseaseComponent } from './admin-crop-disease/admin-crop-disease.component';

import * as $ from 'jquery';
import { CultivateComponent } from './cultivate/cultivate.component';
import { HomeComponent } from './home/home.component';
import { VegSellerComponent } from './veg-seller/veg-seller.component';
import { OrganicFoodComponent } from './organic-food/organic-food.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { SeedSellerComponent } from './seed-seller/seed-seller.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';

import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AboutUsComponent } from './about-us/about-us.component';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    AllCropsComponent,
    AdminAddCropsComponent,
    AdminCropDiseaseComponent,
    CultivateComponent,
    HomeComponent,
    VegSellerComponent,
    OrganicFoodComponent,
    FarmerHomeComponent,
    LoginComponent,
    RegisterComponent,
    SeedSellerComponent,
    AdminDashboardComponent,
    MoreDetailsComponent,
    UserProfilesComponent,
    AboutUsComponent,
    FertilizerComponent,
    AdminContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
