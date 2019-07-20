var mongoose = require("mongoose");
// This will save a reference to the Schema constructor
var Schema = mongoose.Schema;

// By using the Schema constructor, it creates a new NoteSchema
var NoteSchema = new Schema({
    // Title of the String
    type: String,
    // Body of the String
    body: String
});
// This will create the model from the schema, by using mongoose's
var Note = mongoose.model("Note", NoteSchema);

// Export the Article model
module.exports = Note;