var mongoose = require("mongoose");
// Schema constructor
var Schema = mongoose.Schema;

// By using the schema constructor, it creates a new UserSchema object
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: ture
    },

    link: {
        type: String,
        required: true
    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// This will create the model from the schema, by using mongoose's
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;