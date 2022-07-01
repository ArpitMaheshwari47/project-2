const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


<<<<<<< HEAD

mongoose.connect("mongodb+srv://ranaarjunktd:Arjun123@cluster0.8wa2bbn.mongodb.net/arjun42?retryWrites=true&w=majority", {

=======
mongoose.connect("mongodb+srv://ranaarjunktd:Arjun123@cluster0.8wa2bbn.mongodb.net/Group12Database?retryWrites=true&w=majority", {
>>>>>>> 2d68f8f11780f43fa912a60ac3c40d5a8fd22a8d
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
