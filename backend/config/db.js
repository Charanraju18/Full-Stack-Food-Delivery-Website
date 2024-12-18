import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://admin:pmxYat6PdXohPT6f@cluster0.dtlbi.mongodb.net/food-del"
    ).then(() => {
    	console.log("DB Connected");
  	});
};
