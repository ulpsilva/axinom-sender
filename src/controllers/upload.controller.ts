import { NextFunction, Response } from 'express';
import UploadService from '@services/upload.service';
import { FileRequest } from '@interfaces/fileRequest.interface';

class UploadController {
  public uploadService = new UploadService();

  public create = async (req: FileRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.uploadService.create(req.file);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default UploadController;
