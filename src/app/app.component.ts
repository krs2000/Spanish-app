import {ActivatedRoute} from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  description ="lolol";
  private routeSub: any;
  query:string;
  isCollapsed: boolean= true;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  		this.routeSub=this.route.params.subscribe(params=> {
  			this.query= params['q']
  			});
  }

  ngOnDestroy(){
  	this.routeSub.unsubscribe()
  }
}
