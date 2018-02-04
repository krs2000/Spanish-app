import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchLocation ="default search";
searchedQuery:string;
@Input()
passedQuery:string;

  constructor(private router: Router) { }

  ngOnInit() {
  	if(this.passedQuery){
  		this.searchedQuery=this.passedQuery;
  	}
  }

 submitSearch(event, formData){
 	console.log(formData.value);
 	let searchedQuery = formData.value['q'];
 	if (searchedQuery){

 	this.router.navigate(['/search', {q: searchedQuery}])
 	}

 }

searchQueryChange(){
	this.searchLocation="other"
}

}
