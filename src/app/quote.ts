export class Quote {
    public showDescription:boolean;
    upvote:number;
    downvote:number;
    constructor(public id: number,public author:string,public name: string,public quote:string,public Date:Date){
        this.showDescription=false;
        this.upvote=0;
        this.downvote=0;
    }
    
}
