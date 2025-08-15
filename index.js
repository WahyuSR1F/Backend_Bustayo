import express from 'express';
const app = express();
import routes from './routes/route.js';

app.use(express.json());

// app.method(path, handler);
// use method for middleware auth to guard for api
app.use('/', routes);

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log('Server berjalan di http://localhost:3000');
});

