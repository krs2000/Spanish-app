import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { LessonsService } from "../lessons/lessons.service";
import { lessonItem } from '../lessons/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ LessonsService ]
})
export class HomeComponent implements OnInit, OnDestroy {
  private req: any;
  homeImageList :any[];
  lessonsListDefaultImage = '../assets/images/videos/1.jpg';

  constructor(private router: Router, private http: Http, private _lesson: LessonsService) {}
  ngOnInit() {
    this.req = this._lesson.list().subscribe(data => {
      this.homeImageList = [] as [lessonItem];
      data.filter(item =>{
        if (item.featured) {
          this.homeImageList.push(item);
        }
      }
      )
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  preventNormal(event: MouseEvent, image: any) {
    if (!image.prevented) {
      event.preventDefault();
      this.router.navigate(['./videos'])
    }
  }

}
