import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ButlerService } from './services/butler.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyPokemonsService } from './services/myPokemons.service';
import { HubComponent } from './hub/hub.component';
import { VersusComponent } from './versus/versus.component';

import { DummyService } from './services/dummy.service';  // dummy service must be replaced
import { PokemonsService } from './services/pokemons.service';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HubComponent,
    VersusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    ChartsModule
  ],
  providers: [ButlerService, MyPokemonsService, DummyService, PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
