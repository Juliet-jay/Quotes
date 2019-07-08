import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes:Quote[] = [
    new Quote(1,'Nelly',"Brian mknight quote",'nothing last for ever',new Date(2019,3,7)),
    new Quote(2,'Henry',"james bond quote",'the best is yet to come',new Date(2019,5,1)),
    new Quote(3,'micheal smith quote',"Julie",'keep moving forward',new Date(2019,1,7)),
    new Quote(4,'miles monroe quote',"Julie",'better things are yet to come',new Date(2019,2,9)),
    new Quote(5,'lupita nyongo quote',"Julie",'keep dreaming',new Date(2019,7,8)),
    new Quote(6,'julie muthee quote',"Julie",'keep pushing',new Date(2019,10,4)),
    
  ];
   toggleDetails(index){
     this.quotes[index].showDescription =!this.quotes[index].showDescription;
   }

   addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

   completeQuote(isComplete, index){
     if(isComplete) {
       this.quotes.splice(index,1);

     }
   }
   deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upvoteQuote(liked,index){
    if(liked){
      this.quotes[index].upvote+=1;
    }
  }

  downvoteQuote(disliked,index){
    if(disliked){
      this.quotes[index].downvote+=1;
    }

  }



  constructor() {
   
    }

  ngOnInit() {
  }

}
