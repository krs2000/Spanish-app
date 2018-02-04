import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from "../lessons/lessons.service";
import { lessonItem } from '../lessons/lesson';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [LessonsService]
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  private req: any;
  slug: string;
  lesson:lessonItem;

  constructor(private route: ActivatedRoute, private _lesson: LessonsService) {}

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {

      this.slug = params['slug']; 
      this.req = this._lesson.get(this.slug).subscribe(data =>{

        this.lesson = data as lessonItem;


    })
  })
}
ngOnDestroy() {
  this.routeSub.unsubscribe();
  this.req.unsubscribe();
}

  getEmbedUrl(item){
    return 'https://www.youtube.com/embed/'+item.embed;
  }

}
