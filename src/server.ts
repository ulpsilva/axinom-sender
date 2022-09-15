import App from '@/app';
import IndexRoute from '@routes/index.route';
import UploadRoute from '@routes/upload.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UploadRoute()]);

app.listen();
