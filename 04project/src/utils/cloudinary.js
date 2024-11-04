import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'; //file system
import { v2 as cloudinary } from "cloudinary";

 cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
 });



   const uploadCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;
      //upload file on culinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
      })
      //file has been uploaded successfully
      console.log("file is uploaded on culinary", response.url);
      return response;
    } catch (error) {
      fs.unlinkSync(localFilePath) //remove the locally saved temporary file as upload operation failed
      return null;
    }
   }

   export {uploadCloudinary}

  