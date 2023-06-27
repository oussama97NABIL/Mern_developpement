import { InferSchemaType, model, Schema } from "mongoose";

const noteShema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true},
    title: { type: String, required: true },
    text: { type: String },
}, { timestamps: true });

type Note = InferSchemaType<typeof noteShema>;

export default model<Note>("Note", noteShema);