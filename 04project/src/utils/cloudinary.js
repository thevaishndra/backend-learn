//used to upload files (like images or videos) from your server to Cloudinary
//online service for storing and managing media files
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'; //file system


  //sets up cloudinary connection using access keys from env
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, 
  });

   const uploadCloudinary = async (localFilePath) => {
    try {
      //checks if the file path exists
      if (!localFilePath) return null;
      //upload file on culinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      //"auto" lets Cloudinary detect the file type
      //file has been uploaded successfully
      console.log("file is uploaded on culinary", response.url);
      fs.unlinkSync(localFilePath)
      return response;
    } catch (error) {
      fs.unlinkSync(localFilePath) //remove the locally saved temporary file as upload operation failed
      return null;
    }
   }

   export {uploadCloudinary}

  