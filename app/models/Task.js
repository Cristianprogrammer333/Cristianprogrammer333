import { Schema, model } from "mongoose";

const tasKSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    },
    {
        versionKey: false,
        timestamp: true,
    }
);

export default model("task", tasKSchema);