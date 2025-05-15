import { express, dotenv, port } from './imports/PackageImports.js';
import { AdminRouter } from './imports/RouteImports.js';
import { ExaminerRouter } from './imports/RouteImports.js';
import { ExamRouter } from './imports/RouteImports.js';
const app = express();
dotenv.config();

process.once('exit', () => {
  console.log('App exiting...');
});

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/admin', AdminRouter);
app.use('/api/examiner', ExaminerRouter);
app.use('/api/exam', ExamRouter);

try {
  app.listen(port, () => {
    console.log(`App is listening on ${port}`);
  });
} catch (e) {
  console.error(e.message);
}

export default app;
