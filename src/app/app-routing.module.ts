import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListofdataComponent } from './listofdata/listofdata.component';
import { UserDetailFormComponent } from './user-detail-form/user-detail-form.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';

const routes: Routes = [
  { path: '', component: UserDetailFormComponent },
  { path: 'ListOfData', component: ListofdataComponent },
  { path: 'Pagination', component: ListPaginationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
