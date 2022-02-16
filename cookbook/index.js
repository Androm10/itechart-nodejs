let express = require('express');
const app = express();
const passport = require('./src/passport');

const authRouter = require('./src/routers/authRouter');
const recipeRouter = require('./src/routers/recipeRouter');
const cookbookRouter = require('./src/routers/cookbookRouter');

const errorHandler = require('./src/middlewares/errorHandler');
const authorize = require('./src/middlewares/authorize');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());


app.use('/', authRouter);

app.use(authorize);
app.use('/recipe', recipeRouter);
app.use('/cookbook', cookbookRouter);

app.use(errorHandler);

startListening();

function startListening() {
    try {
        app.listen(3000, () => {
            
            console.log("start listening");

        })
    }
    catch(error) {

        console.log("cannot start listening");
    
    }
}