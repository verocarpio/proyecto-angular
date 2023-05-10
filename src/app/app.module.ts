import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { FooterComponent } from './footer/footer.component';
import { EdicionSobreMiComponent } from './edicion-sobre-mi/edicion-sobre-mi.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { BotonLoginComponent } from './boton-login/boton-login.component';

import { LogoargProgramaComponent } from './menu/logoarg-programa/logoarg-programa.component';
import { RedesvComponent } from './menu/redesv/redesv.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { SobremiEdicionComponent } from './modals/sobremi-edicion/sobremi-edicion.component';
import { SkillsBotonesComponent } from './modals/skills-botones/skills-botones.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    LoginComponent,
    RedesComponent,
    SobreMiComponent,
    FooterComponent,
    EdicionSobreMiComponent,
    IndexComponent,
    ErrorComponent,
    BotonLoginComponent,
    LogoargProgramaComponent,
    RedesvComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    SobremiEdicionComponent,
    SkillsBotonesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
