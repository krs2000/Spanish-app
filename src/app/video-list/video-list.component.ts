import { Component, OnInit, OnDestroy } from '@angular/core';
import { LessonsService } from "../lessons/lessons.service";
import { lessonItem } from '../lessons/lesson'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [LessonsService]
})
export class VideoListComponent implements OnInit, OnDestroy {
	title = 'Lessons List';

	private req: any;
	lessonsList : [ lessonItem ];

  constructor( private video: LessonsService) { }



  ngOnInit(){

  	this.req = this.video.list().subscribe(data=>{

  	this.lessonsList = data as [lessonItem];
  
  })
  }

  ngOnDestroy(){
  	this.req.unsubscribe();
  }

  getEmbedUrl(item){
  	return 'https://www.youtube.com/embed/'+item.embed;
  }

}
