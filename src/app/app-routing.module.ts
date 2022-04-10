import { RoleGuard } from './helpers/role.guard';
import { CanActiveGuard } from './helpers/can-active.guard';
import { AdHomeComponent } from './screens/admin/ad-home/ad-home.component';
import { SigupComponent } from './screens/sigup/sigup.component';
import { LoginComponent } from './screens/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { SubjectComponent } from './screens/subject/subject.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { StudentComponent } from './screens/student/student.component';
import { AdStudentComponent } from './screens/admin/ad-student/ad-student.component';
import { AdSubjectComponent } from './screens/admin/ad-subject/ad-subject.component';
import { AdQuizComponent } from './screens/admin/ad-quiz/ad-quiz.component';
import { FromUploadComponent } from './screens/from-upload/from-upload.component';
import { FormComponent } from './screens/admin/ad-quiz/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'student', component: StudentComponent },
      { path: 'quiz/:code', component: QuizComponent , canActivate: [CanActiveGuard]},
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'sigup', component: SigupComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate : [CanActiveGuard,RoleGuard],
    children: [
      { path: '', component: AdHomeComponent },
      { path: 'student', component: AdStudentComponent },
      { path: 'subject', component: AdSubjectComponent },
      { path: 'subject/quiz/:code', component: AdQuizComponent },
      { path: 'form/:code', component: FormComponent },
      { path: 'form/:code/:id', component: FormComponent },
    ],
  },
  { path: 'upload', component: FromUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
