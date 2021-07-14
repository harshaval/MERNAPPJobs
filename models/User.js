const mongoose = reqiure("mongoose");
const Schema = mongoose.Schema;
const bycrypt = require("bcryptjs");

const UserSchema = ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true },
    date: { type: Date, default: Date.now }
});

//Auth user against database
UserSchema.statics.authenticate = function(email, password, callback){
    User.findOne({ email: email }).exec(function(err, user) {
        if (err) {
            return callback(err);
        } else if(!user) {
            var err = new Error("User not found");
            err.status = 401;
            return callback(err);
        }
        bycrypt.compare(password, user.password, function(err, result) {
            if (result == true) {
                return callback(null, user);
            } else {
                return callback();
            }
        });
    });
};

UserSchema.pre("save", function(next){
    let user = this;
    bycrypt.hash(user.password, 10, function(err, hash) {
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    });
});
module.exports = User = mongoose.model("user", UserSchema);