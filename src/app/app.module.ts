import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { YagaModule } from '@yaga/leaflet-ng2';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DefisComponent } from './defis/defis.component';
import { ChamisComponent } from './chamis/chamis.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { VisitesComponent } from './visites/visites.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CarteComponent } from './carte/carte.component';
import { DefiDetailPlayComponent } from './defi-detail-play/defi-detail-play.component';
import { ProfilComponent } from './profil/profil.component';
import { CreationdefiComponent } from './creation-defi/creationdefi.component';
import { EditDefiComponent } from './edit-defi/edit-defi.component';
import { AssistantVisitComponent } from './assistant-visit/assistant-visit.component';
import { CompteurComponent } from './compteur/compteur.component';
import { TestImageuploadComponent } from './test-imageupload/test-imageupload.component';
import {
  AngularFireStorageModule, BUCKET,
  
} from "@angular/fire/storage";
;
@NgModule({
  declarations: [	
    AppComponent,
      DefisComponent,
      ChamisComponent,
      VisitesComponent,
      HomeComponent,
      LoginComponent,
      NavComponent,
      CarteComponent,
      DefiDetailPlayComponent,
      ProfilComponent,
      CreationdefiComponent,
      EditDefiComponent,
      AssistantVisitComponent,
      CompteurComponent,
      TestImageuploadComponent
   ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    AngularFireAuthModule,
    YagaModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    MatListModule,
    AngularFireStorageModule,


  ],
  providers: [HttpClient], 
  bootstrap: [AppComponent]
})
export class AppModule { }
