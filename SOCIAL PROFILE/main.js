//Creating a class named AboutMe
var AboutMe = /** @class */ (function () {
    //end of fields
    //Initializing the constructor
    function AboutMe(FirstName, LastName, DOB, mobileNumber, emailId, education, workExp, currentCity, homeTown, gender, interestedIn, religiousViews, relationshipStatus, friends) {
        var _this = this;
        //getter methos
        this.getFirstName = function () {
            return _this.FirstName;
        };
        this.getLastName = function () {
            return _this.LastName;
        };
        this.getDOB = function () {
            return _this.DOB;
        };
        this.getmobileNumber = function () {
            return _this.mobileNumber;
        };
        this.getemailId = function () {
            return _this.emailId;
        };
        this.geteducation = function () {
            return _this.education;
        };
        this.getworkExp = function () {
            return _this.workExp;
        };
        this.getcurrentCity = function () {
            return _this.currentCity;
        };
        this.gethomeTown = function () {
            return _this.homeTown;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getinterestedIn = function () {
            return _this.interestedIn;
        };
        this.getreligiousViews = function () {
            return _this.religiousViews;
        };
        this.getrelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getfriends = function () {
            return _this.friends;
        }; //end of getter methos
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DOB = DOB;
        this.mobileNumber = mobileNumber;
        this.emailId = emailId;
        this.education = education;
        this.workExp = workExp;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.religiousViews = religiousViews;
        this.relationshipStatus = relationshipStatus;
        this.friends = friends;
    } //end of constructor
    return AboutMe;
}()); //end of class 
//object creation
var Me = new AboutMe("Ajay", "Manshani", "12 July 1998", 7891037425, "ajaymanshani3@gmail.com", "2nd year B.Tech CSE UPES Dehradun", "Technical Head - UPES Informatics Club", "Dehradun", "Village Khargone M.P.", "Male", "Women", "Sindhi", "single", 291);
//printing output on console
console.log("First Name: " + Me.getFirstName());
console.log("Lat Name: " + Me.getLastName());
console.log("DOB: " + Me.getDOB());
console.log("Mobile Number: " + Me.getmobileNumber());
console.log("Email Id: " + Me.getemailId());
console.log("Education: " + Me.geteducation());
console.log("Work Experience: " + Me.getworkExp());
console.log("Current City: " + Me.getcurrentCity());
console.log("Home Town: " + Me.gethomeTown());
console.log("Gender: " + Me.getgender());
console.log("Interested In: " + Me.getinterestedIn());
console.log("Religious Views: " + Me.getreligiousViews());
console.log("Relationship Status: " + Me.getrelationshipStatus());
console.log("Total No. of Friends: " + Me.getfriends());
