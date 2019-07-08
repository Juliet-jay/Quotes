import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()quote:Quote;
  @Output()isComplete = new EventEmitter<boolean>();
  @Output() isLiked=new EventEmitter<boolean>();
  @Output() isDisLiked=new EventEmitter<boolean>();
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
    downvote(dislike:boolean){
      this.isDisLiked.emit(dislike)
    }

    upvote(liked:boolean){
    this.isLiked.emit(liked)

  }

  constructor() { }

  ngOnInit() {
  }

}
