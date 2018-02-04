import { Component, OnInit, OnDestroy,Directive ,ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lessonItem } from "../lessons/lesson";
import { LessonsService } from "../lessons/lessons.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
  providers: [LessonsService]
})
export class TaskComponent implements OnInit,OnDestroy  {
  private routeSub: any;
  private req: any;
  slug: string;
  lesson: lessonItem;
  answerQ2: string;
  answerQ1: string;

  Q1: boolean = false;
  Q2: boolean = false;

  @ViewChild('Q1text') Q1text;
  @ViewChild('Q2text') Q2text;

  constructor(private route: ActivatedRoute, private _lesson: LessonsService) {}

  ngOnInit() { 
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params["slug"];
      this.req = this._lesson.get(this.slug).subscribe(data => {
        this.lesson = data as lessonItem;
      });
    });
  }


  checkQ1() {
    if (this.answerQ1 == this.lesson.solutions[0]) {
      if (this.Q1text.nativeElement.classList.contains("red")) {
        this.Q1text.nativeElement.classList.remove("red");
      }
      this.Q1text.nativeElement.classList.add("green");
      this.Q1 = true;
    } else {
      this.Q1text.nativeElement.classList.add("red");
    }
  }

  checkQ2() {
    if (this.answerQ2 == this.lesson.solutions[1]) {
         if (this.Q2text.nativeElement.classList.contains("red")) {
        this.Q2text.nativeElement.classList.remove("red");
      }
      this.Q2text.nativeElement.classList.add("green");
      this.Q2 = true;
    } else {
     this.Q2text.nativeElement.classList.add("red");
    }
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
