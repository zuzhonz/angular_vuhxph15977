import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

//import gg login
import { SocialLoginModule,SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';


//import firebase 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

//import component asm
import { LoginComponent } from './screens/login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { SubjectComponent } from './screens/subject/subject.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigupComponent } from './screens/sigup/sigup.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { StudentComponent } from './screens/student/student.component';
import { AdStudentComponent } from './screens/admin/ad-student/ad-student.component';
import { AdSubjectComponent } from './screens/admin/ad-subject/ad-subject.component';
import { AdQuizComponent } from './screens/admin/ad-quiz/ad-quiz.component';
import { AdHomeComponent } from './screens/admin/ad-home/ad-home.component';
import { HomeComponent } from './screens/home/home.component';
// import environment 
import { environment } from 'src/environments/environment';
import { FromUploadComponent } from './screens/from-upload/from-upload.component';
import { FormComponent } from './screens/admin/ad-quiz/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    // layout declarations 
    HomeLayoutComponent,
    AdminLayoutComponent,
    //client declarations
    LoginComponent,
    SubjectComponent,
    QuizComponent,
    SigupComponent,
    StudentComponent,
    //pipe declarations
    
    // end pipe declarations

    //admin declarations 
    AdStudentComponent,
    AdSubjectComponent,
    AdQuizComponent,
    AdHomeComponent,
    HomeComponent,
    FromUploadComponent,
    FormComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,

    //bootstrap and icon modules
    FontAwesomeModule,
    NgbModule,

    // HttpModule api
    HttpClientModule,

    // login from and login gg
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    //end login

    //firebase module and firebase storage
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    //end firebase

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
