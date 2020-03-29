import { Component, OnInit, Input } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  upArrowIcon = faArrowUp;
  downArrowIcon = faArrowDown;

  @Input()
  article: Article;

  constructor() {
    // this.article = new Article('Angular 9', 'http://angular.io', 10);
   }

  ngOnInit(): void {
    // this.article.votes = 0;
  }

  onUp() {
    console.log('Up...');
    this.article.voteUp();
  }
  onDown() {
    console.log('Down...');
    this.article.voteDown();
  }

}
