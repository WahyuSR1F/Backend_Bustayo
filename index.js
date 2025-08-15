import express from 'express';
const app = express();
import routes from './routes/route.js';

app.use(express.json());

// app.method(path, handler);
// use method for middleware auth to guard for api
app.get('/', routes);

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});