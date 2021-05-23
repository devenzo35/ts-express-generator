"use strict";
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "User is mandatory"],
    },
    email: {
        type: String,
        required: [true, "email is mandatory"],
    },
    password: {
        type: String,
        required: [true, "password is mandatory"],
    },
});
module.exports = mongoose_1.model("User", User);
