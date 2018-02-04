import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LessonsService } from "../lessons/lessons.service";
import { lessonItem } from '../lessons/lesson';

@Component({
  selector: "app-search-detail",
  templateUrl: "./search-detail.component.html",
  styleUrls: ["./search-detail.component.css"],
 providers: [LessonsService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  query: string;
  lessonsList: lessonItem=null;
  private req: any;

  constructor(private route: ActivatedRoute, private _lesson: LessonsService) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params["q"]
      this.req = this._lesson.search(this.query).subscribe(data => {
        this.lessonsList = data as lessonItem ;
      
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

    getEmbedUrl(item){
    return 'https://www.youtube.com/embed/'+item.embed;
  }
}
