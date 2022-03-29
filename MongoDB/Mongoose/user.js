const mongoose  = require('mongoose');

//creating a new schema
const fruitsSchema = new mongoose.Schema({
name: String,
rating: Number,
review: String
})

//creating a model
module.exports = mongoose.model("Fruits", fruitsSchema)

// creating the adress schema
const addressSchema  = new mongoose.Schema({
    Street: String,
    City: String
})

//creating a another new schema
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    CreatedAt: Date,
    UpdatedAt: Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    adress: addressSchema,
})

// //creating another model
// module.exports = mongoose.model("Users", UserSchema)

const TopicSchema = mongoose.Schema({
    topic : String,
    youtubeUrl : String,
    pdfName : String,
    pdfUrl : String,
});

const UnitSchema = mongoose.Schema({
    unit : {
        type : Number,
        unique : true,
    },
    pdfName : String,
    pdfUrl : String,
    topics  : {
        type : [TopicSchema],
        unique : true,
    },
});

const SubjectSchema = mongoose.Schema({
    subject : String,
    subjectBookName : String,
    subjectBookUrl : String,
    units : {
        type : [UnitSchema],
        unique : true,
    }
});

const SemesterSchema  = mongoose.Schema({
    sem : {
        type : Number,
        unique : true,
    },
    subjects : {
        type : [SubjectSchema],
        unique : true,
    }
});

const CourseSchema = mongoose.Schema({
    course : {
        type : String,
        unique: true,
    },
    semesters : {
        type : [SemesterSchema] ,
        unique : true,
    }
});

const PadhloSchema = mongoose.Schema({
    courses : {
        type : [CourseSchema],
        unique : true,
    }
});