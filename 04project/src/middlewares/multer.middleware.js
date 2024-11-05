import multer from "multer";//for handling multipart/form-data, commonly used for file uploads

const storage = multer.diskStorage({
  destination: function (req, file, cb) {//Where to save uploaded files
    cb(null, "./public/temp");//it tells multer to save files in public directory in temp
    //null is passed to indicate no error
  },//cb is callback
  filename: function (req, file, cb) {//What to name the saved file
    cb(null, file.originalname);//file on the disk has same name when uploaded
  },
});

export const upload = multer({ storage: storage });