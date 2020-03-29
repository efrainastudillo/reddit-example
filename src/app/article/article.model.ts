export class Article {
  link: string;
  title: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.link = link;
    this.title = title;
    this.votes = votes || 0;
  }

  voteDown(): number {
    return this.votes -= 1;
  }

  voteUp(): number {
    return this.votes += 1;
  }
}
