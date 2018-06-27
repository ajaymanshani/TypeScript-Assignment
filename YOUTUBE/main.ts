//Creating class named YouTubeVideo
class YouTubeVideo {
    //setting the fields of class
    private title: string;
    private views: number;
    private likes: number;
    private dislikes: number;
    private channel: string;
    private description : string;
    private commentNumber: number;
    private postedOn: string;
    private channelSubscribers : string;
    private link: string;
    //End of fields

    //Initializing the constructor
    constructor (title:string, views:number, likes:number, dislikes:number, channel:string, description:string, commentNumber:number, postedOn:string, channelSubscribers:string, link:string) {
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channel = channel;
        this.description = description;
        this.commentNumber = commentNumber;
        this.postedOn = postedOn;
        this.channelSubscribers = channelSubscribers;
        this.link = link;
    } //End of the constructor

    //getter functions

    gettitle= () => {
        return this.title;
    } 

    getviews= () => {
        return this.views;
    }

    getlikes= () => {
        return this.likes;
    }

    getdislikes= () => {
        return this.dislikes;
    }

    getchannel= () => {
    return this.channel;
    }

    getdescription= () => {
        return this.description;
    }

    getcommentNumber= () => {
        return this.commentNumber;
    }

    getpostedOn= () => {
        return this.postedOn;
    }

    getchannelSubscribers= () => {
        return this.channelSubscribers;
    }

    getlink= () => {
        return this.link;
    }
    //End of getters

    //Setter functions
    //some fields may change with time, for ex - views, likes, dislikes etc.

    setVideoViews = (views1:number) => {
        this.views = views1;
    }

    setVideoLikes = (likes1:number) => {
        this.likes = likes1;
    }

    setVideoDislikes = (dislikes1:number) => {
        this.dislikes = dislikes1;
    }



}//End of class

let MadeInIndia = new YouTubeVideo(
    "Guru Randhawa: MADE IN INDIA | Bhushan Kumar | DirectorGifty | Elnaaz Norouzi | Vee",
    94238388,
    1100000,
    85000,
    "T-Series",
    "Gulshan Kumar and T-Series present Bhushan Kumar's official music video of the song Made In India. Featuring Guru Randhawa & Elnaaz Norouzi, This latest song is composed, written & sung by Guru Randhawa.  The video directed by DirectorGifty.",
    88557,
    "Jun 5 2018",
    "50 Million",
    "https://www.youtube.com/watch?v=pnMQLrS5sTE&list=RDpnMQLrS5sTE&start_radio=1",
)

console.log(`Video Title: ${MadeInIndia.gettitle()}`);
console.log(`Views: ${MadeInIndia.getviews()}`);
console.log(`Likes: ${MadeInIndia.getlikes()}`);
console.log(`Dislikes: ${MadeInIndia.getdislikes()}`);
console.log(`Channel: ${MadeInIndia.getchannel()}`);
console.log(`Description: ${MadeInIndia.getdescription()}`);
console.log(`No. of comments: ${MadeInIndia.getcommentNumber()}`);
console.log(`Posted On: ${MadeInIndia.getpostedOn()}`);
console.log(`Channel: ${MadeInIndia.getchannelSubscribers()}`);
console.log(`Link: ${MadeInIndia.getlink()}`);

MadeInIndia.setVideoViews(94238395);
console.log(`New number of Views: ${MadeInIndia.getviews()}`);
