var express = require ('express');
var path = require ('path');
var app = express()
var bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
var db = require('./models')
var Teachers = require('./models/teacher')
var Subjects = require('./models/subject')
var Students = require('./models/student')
// var index = require('./Routers/index.js')
// var Subjects = require('./Routers/subject.js')
var Teachers = require('./routes/teacher.js')
var Subjects = require('./routes/subject.js')
var Students = require('./routes/student.js')
var Index = require('./routes/index.js')
// app.use('/', index)
// app.use('/Subjects', Subjects)
app.use('/teacher', Teachers)
app.use('/subjects', Subjects)
app.use('/student', Students)
app.use('/', Index)
app.listen(process.env.PORT || 3000);
