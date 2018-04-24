const mongoose = require ('mongoose')

const schema = mongoose.schema

const IdeaSchema = new Schema ({
    Title: String,
    Description: String,
    Created: Date
})


const Userschema = new Schema ({
    Username: String,
    Password: String,
    Ideas:[IdeasSchema]

})

const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeaSchema)

// Export each model so they can be required elsewhere
module.exports = {
    UserModel,
    IdeaModel
}