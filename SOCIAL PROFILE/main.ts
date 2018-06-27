//Creating a class named AboutMe
class AboutMe {
    //setting the fields
    private FirstName: string;
    private LastName: string;
    private DOB: string;
    private mobileNumber: number;
    private emailId: string;
    private education: string;
    private workExp: string;
    private currentCity: string;
    private homeTown: string;
    private gender: string;
    private interestedIn: string;
    private religiousViews: string;
    private relationshipStatus: string;
    private friends: number;
    //end of fields

    //Initializing the constructor
    constructor(FirstName:string, LastName:string, DOB:string, mobileNumber:number,
    emailId:string, education:string, workExp:string, currentCity:string, homeTown:string, gender:string,
interestedIn:string, religiousViews:string, relationshipStatus:string, friends:number){

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
}//end of constructor

//getter methos
getFirstName= () => {
    return this.FirstName;
}

getLastName= () => {
    return this.LastName;
}

getDOB= () => {
    return this.DOB;
}

getmobileNumber= () => {
    return this.mobileNumber;
}

getemailId= () => {
    return this.emailId;
}

geteducation= () => {
    return this.education;
}

getworkExp= () => {
    return this.workExp;
}

getcurrentCity= () => {
    return this.currentCity;
}

gethomeTown= () => {
    return this.homeTown;
}

getgender= () => {
    return this.gender;
}

getinterestedIn= () => {
    return this.interestedIn;
}

getreligiousViews= () => {
    return this.religiousViews;
}

getrelationshipStatus= () => {
    return this.relationshipStatus;
}

getfriends= () => {
    return this.friends;
}//end of getter methos

}//end of class 

//object creation
let Me = new AboutMe(
    "Ajay","Manshani","12 July 1998",7891037425,"ajaymanshani3@gmail.com","2nd year B.Tech CSE UPES Dehradun",
    "Technical Head - UPES Informatics Club", "Dehradun", "Village Khargone M.P.", "Male", "Women", "Sindhi",
    "single",291
)

//printing output on console
console.log(`First Name: ${Me.getFirstName()}`);
console.log(`Lat Name: ${Me.getLastName()}`);
console.log(`DOB: ${Me.getDOB()}`);
console.log(`Mobile Number: ${Me.getmobileNumber()}`);
console.log(`Email Id: ${Me.getemailId()}`);
console.log(`Education: ${Me.geteducation()}`);
console.log(`Work Experience: ${Me.getworkExp()}`);
console.log(`Current City: ${Me.getcurrentCity()}`);
console.log(`Home Town: ${Me.gethomeTown()}`);
console.log(`Gender: ${Me.getgender()}`);
console.log(`Interested In: ${Me.getinterestedIn()}`);
console.log(`Religious Views: ${Me.getreligiousViews()}`);
console.log(`Relationship Status: ${Me.getrelationshipStatus()}`);
console.log(`Total No. of Friends: ${Me.getfriends()}`);