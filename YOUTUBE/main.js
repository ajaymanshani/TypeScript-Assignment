//Creating class named YouTubeVideo
var YouTubeVideo = /** @class */ (function () {
    //End of fields
    //Initializing the constructor
    function YouTubeVideo(title, views, likes, dislikes, channel, description, commentNumber, postedOn, channelSubscribers, link) {
        var _this = this;
        //getter functions
        this.gettitle = function () {
            return _this.title;
        };
        this.getviews = function () {
            return _this.views;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.getchannel = function () {
            return _this.channel;
        };
        this.getdescription = function () {
            return _this.description;
        };
        this.getcommentNumber = function () {
            return _this.commentNumber;
        };
        this.getpostedOn = function () {
            return _this.postedOn;
        };
        this.getchannelSubscribers = function () {
            return _this.channelSubscribers;
        };
        this.getlink = function () {
            return _this.link;
        };
        //End of getters
        //Setter functions
        //some fields may change with time, for ex - views, likes, dislikes etc.
        this.setVideoViews = function (views1) {
            _this.views = views1;
        };
        this.setVideoLikes = function (likes1) {
            _this.likes = likes1;
        };
        this.setVideoDislikes = function (dislikes1) {
            _this.dislikes = dislikes1;
        };
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
    return YouTubeVideo;
}()); //End of class
var MadeInIndia = new YouTubeVideo("Guru Randhawa: MADE IN INDIA | Bhushan Kumar | DirectorGifty | Elnaaz Norouzi | Vee", 94238388, 1100000, 85000, "T-Series", "Gulshan Kumar and T-Series present Bhushan Kumar's official music video of the song Made In India. Featuring Guru Randhawa & Elnaaz Norouzi, This latest song is composed, written & sung by Guru Randhawa.  The video directed by DirectorGifty.", 88557, "Jun 5 2018", "50 Million", "https://www.youtube.com/watch?v=pnMQLrS5sTE&list=RDpnMQLrS5sTE&start_radio=1");
console.log("Video Title: " + MadeInIndia.gettitle());
console.log("Views: " + MadeInIndia.getviews());
console.log("Likes: " + MadeInIndia.getlikes());
console.log("Dislikes: " + MadeInIndia.getdislikes());
console.log("Channel: " + MadeInIndia.getchannel());
console.log("Description: " + MadeInIndia.getdescription());
console.log("No. of comments: " + MadeInIndia.getcommentNumber());
console.log("Posted On: " + MadeInIndia.getpostedOn());
console.log("Channel: " + MadeInIndia.getchannelSubscribers());
console.log("Link: " + MadeInIndia.getlink());
MadeInIndia.setVideoViews(94238395);
console.log("New number of Views: " + MadeInIndia.getviews());
