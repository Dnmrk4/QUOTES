export class Quotes {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public poster: string,
    public postTime: Date,
    public upvote: number,
    public downvote: number
  ) {  }
}
