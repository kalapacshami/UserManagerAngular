import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

export const routes: Routes = [
    {path: 'hello', component: HelloComponent },
    {path: 'world', component: WorldComponent },
    {path: 'welcome', component: WelcomeComponent },
    {path: 'users', component: ListUsersComponent },
    {path: 'comments', component: ListCommentsComponent },
    {path: 'edituser/:id', component: EditUserComponent },
    {path: 'search/:username', component: SearchUserComponent },

    {path: '**', redirectTo:'welcome', pathMatch: 'full'},
    
  ];
