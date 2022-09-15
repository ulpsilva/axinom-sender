import { Router } from 'express';
import multer from 'multer';
import UploadController from '@controllers/upload.controller';
import { Routes } from '@interfaces/routes.interface';
import { HttpException } from '@exceptions/HttpException';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}.${file.originalname.split('.').pop()}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'application/zip') {
    return cb(new HttpException(400, 'file is not allowed'));
  }

  cb(null, true);
};

class UploadRoute implements Routes {
  public path = '/api/v1/upload';
  public router = Router();
  public uploadController = new UploadController();
  public upload = multer({ storage, fileFilter });

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.upload.single('file'), this.uploadController.create);
  }
}

export default UploadRoute;
