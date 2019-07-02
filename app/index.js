import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import logger from './util/logger';
import routes from './routes';

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(compression());
process.env.NODE_ENV !== 'prod' && app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

app.listen(port, err => {
    if (err) {
        logger.error(err.toString());
        return;
    }
    logger.info(`app is running at port ${port}`);
});
