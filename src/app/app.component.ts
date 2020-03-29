import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from './article/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-reddit';
  articles: Array<Article>;

  onAddLink( form: NgForm ): boolean {
    if ( form.invalid ) {
      return false;
    }
    console.log('on AddLink');
    this.articles.push( new Article(form.value.title, form.value.link) );
    return true;
  }

  ngOnInit() {
    this.articles = new Array();
  }
}
