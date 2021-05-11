import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from'@angular/common/http';
import { TableComponent } from './table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatButtonModule} from'@angular/material/button';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaComponent } from './nueva/nueva.component';
import { UnirComponent } from './unir/unir.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },

  { path: 'nueva', component: NuevaComponent},
  { path: 'unirse', component: UnirComponent},
  { path: 'juego', component: TableComponent},
  { path: '', component : InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InicioComponent,
    NuevaComponent,
    UnirComponent,
    
    
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
   
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
