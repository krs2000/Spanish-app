import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'search',
		component: SearchDetailComponent
	},
	{
		path: 'lessons',
		component: VideoListComponent
	},
	{
		path: 'lessons/:slug',	
		component: VideoDetailComponent
	},
	{
		path: 'task/:slug',
		component: TaskComponent
	}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
