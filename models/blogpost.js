const mongoose = require("mongoose");

const { DateTime } = require("luxon");
// const moment = require("moment")
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

blogPostSchema.virtual("date_formatted").get(function() {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
})

module.exports = mongoose.model("BlogPost", blogPostSchema);
