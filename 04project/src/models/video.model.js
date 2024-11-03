import mongoose, {Schema} from 'mongoose';

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //culinary url
      required: true,
    },
    thumbnail: {
      type: String, //culinary url
      required: true,
    },
    title: {
      type: String, 
      required: true,
    },
    description: {
      type: String, 
      required: true,
    },
    duration: {
      type: Number, //culinary url
      required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Video = mongoose.model("Video", videoSchema) 