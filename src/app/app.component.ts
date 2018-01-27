import { Component } from '@angular/core';


export interface SearchElement {
  tokens: string[];
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public results: SearchElement[] = 
	[
	  {
	    value: 'Era uma vez',
	    tokens: ['Era', 'uma', 'vez']
	  },
	  {
	    value: 'Uma historia muito bonita',
	    tokens: ['Uma', 'historia', 'muito', 'bonita']
	  }
	];

  	title = 'app';

  	public inputText: string = '';

  	constructor() {}

  	public handleInputChange(event) {

  	}

}


