// User model - require modules
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username: {
            type: String,
            default: "",
            trim: true,
            required: "Username Required"
        },
        /*
        password: {
            type: String,
            default: "";
            trim: true,
            required: "Passport Required"
        }
        */
       email: {
            type: String,
            default: "",
            trim: true,
            required: "E-mail Address Required"
       },
       displayName: {
            type: String,
            default: "",
            trim: true,
            required: "Display Name is Required"
       },
       created: {
            type: Date,
            default: Date.now,
       },
       updated: {
            type: Date,
            default: Date.now,
        }
    },
    {
        collection: "users"
    }
);

// configure User Model
let options = ({missingPasswordError: 'Wrong/Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);