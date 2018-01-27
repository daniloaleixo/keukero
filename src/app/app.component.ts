import { Component } from '@angular/core';


export interface ISearchElement {
  tokens: string[];
  title: string;
  category: string;
  city: string;
  telephone: string;
  email?: string;
  whatsapp?: string;
  URL?: string;
  photoURL?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public results: ISearchElement[] = [];

	// Component state variables
	public showedResults: ISearchElement[] = [];
  	public inputText: string = '';
  	public resultSelected: ISearchElement = null;

  	constructor() {
  		this.results = this.constructMockResults();
  		this.showedResults = this.results;
  	}

  	public handleInputChange(event) {
  		this.showedResults = this.filterResults(this.results, this.inputText.toLowerCase());
  		this.resultSelected = null;
  	}


  	public selectResult(result: ISearchElement) {
  		this.resultSelected = result;
  	}

  	private constructMockResults(): ISearchElement[] {
  		const results: ISearchElement[] = [];

  		const categories = ['Autocadista', 'Academia', 'Pizzaria', 'Borracharia'];

  		// Insert info
  		for(let i = 0; i < 10; i++) {
  			let result: ISearchElement = {
  				category: categories[parseInt((Math.random() * categories.length).toString())],
  				city: 'Diadema',
  				title: 'Empresa ' + i,
  				telephone: '11 994349394',
  				tokens: [] 
  			};

  			results.push(result);
  		}

  		// Append tokens
  		results.map((result: ISearchElement) => {
  			result.tokens = this.makeTokens(result);
  		});


  		return results;
  	}

  	private makeTokens(element: ISearchElement): string[] {
  		const result: string[] = [];

  		Object.keys(element).map((key: string) => {
  			if(key != 'tokens') {
	  			let value: string = element[key];
	  			value.split(' ').map((s: string) => {
	  				result.push(s.toLowerCase());
	  			});
  			}
  		});

  		return result;
  	}

  	private filterResults(allResults: ISearchElement[], value: string): ISearchElement[] {
  		return allResults.filter((result: ISearchElement) => {
  			return result.tokens
  			.filter((token: string) => token.includes(value))
  			.length > 0;
  		});
  	}

}


