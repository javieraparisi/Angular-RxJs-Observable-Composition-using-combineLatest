import {Component} from 'angular2/core';
import {SearchService} from './services/Search';
import {HTTP_BINDINGS} from 'angular2/http'
import 'rxjs/Rx';   
import {Observable} from 'rxjs/Observable';   
 
@Component({
	selector: 'app-root',
	templateUrl: 'app/app.component.html'
})

export class AppComponent {
	searchField:Control;
	coolForm:ControlGroup; 
	
	constructor(private searchService:SearchService) {
		var obsSearchRock = this.searchService.search("rock");
		var obsSearchPop  = this.searchService.search("pop");
		this.searchMix = Observable.combineLatest(obsSearchRock, obsSearchPop)
		.map(arrayList => arrayList[0].concat(arrayList[1]));
		 
	}
	
}