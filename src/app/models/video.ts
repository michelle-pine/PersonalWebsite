export class Video {
    caption:string;
    video:string;
    poster:string;
    direct:string = "./assets/images/pj-posters/";

    constructor(caption:string, video:string, poster:string) {
        this.caption =  caption;
        this.video = video;
        this.poster = this.direct  + poster;

    }
}