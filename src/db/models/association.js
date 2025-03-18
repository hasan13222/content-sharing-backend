import Content from "./content.js";
import Profile from "./profile.js";
import User from "./user.js";


// User and profile have one to one relation
User.hasOne(Profile, {
    foreignKey: 'userId'
})

Profile.belongsTo(User, {
    foreignKey: 'userId'
})

// user has one to many relation with content
User.hasMany(Content, { foreignKey: "userId", as: "contents" });
Content.belongsTo(User, { foreignKey: "userId", as: "user" });