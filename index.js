const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://KrishanSharma:Northwest@123@cluster0-briyc.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(() => console.log('DB connteced'))
                        .catch(err => console.error(err));
app.get('/',(req,res) => {
    res.send("Krishannna")
    console.log("yes working")
});

app.listen(5000);