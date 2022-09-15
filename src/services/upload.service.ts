import fs from 'fs';
import JSZip from 'jszip';
import _ from 'lodash';
import { ZipFileContent } from '@interfaces/zipFileContent.interface';
import { HttpException } from '@exceptions/HttpException';
import { Api } from '@axinom/sdk';

class UploadService {
  public async create(data): Promise<Array<ZipFileContent>> {
    if (!data) {
      throw new HttpException(400, 'file is required');
    }

    // read a zip file
    const uploadedFile = await fs.readFileSync(data.path);
    const zipFile = await JSZip.loadAsync(uploadedFile);

    const filesObj: Array<ZipFileContent> = _.map(zipFile.files, item => {
      return {
        name: item.name,
        dir: item.dir,
        date: item.date,
      };
    });

    // remove uploaded file
    await fs.unlinkSync(data.path);

    const res = (await Api.store.save({ files: filesObj })).data;

    return res;
  }
}

export default UploadService;
