import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

export const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//if the model is already defined , use that model else create a new one

export default mongoose.models["categories"] ||
  mongoose.model("categories", categorySchema);
