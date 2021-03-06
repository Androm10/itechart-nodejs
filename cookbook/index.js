let express = require('express');
const app = express();
const passport = require('./src/passport');
const config = require('./src/config').server;

const { startAllJobs } = require('./src/jobs/');


const authRouter = require('./src/routers/authRouter');
const recipeRouter = require('./src/routers/recipeRouter');
const cookbookRouter = require('./src/routers/cookbookRouter');
const userRouter = require('./src/routers/userRouter');
const likeRouter = require('./src/routers/likeRouter');
const commentRouter = require('./src/routers/commentRouter');

const errorHandler = require('./src/middlewares/errorHandler');
const authorize = require('./src/middlewares/authorize');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());


app.use('/', authRouter);

app.use(authorize);
app.use('/recipe', recipeRouter);
app.use('/cookbook', cookbookRouter);
app.use('/user', userRouter);
app.use('/like', likeRouter);
app.use('/comment', commentRouter);

app.use(errorHandler);



startListening();

function startListening() {
    try {
        app.listen(3000, config.host, () => {
            
            console.log("start listening");
            startAllJobs();
        })
    }
    catch(error) {

        console.log("cannot start listening");
    
    }
}
app.listen()