var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
"artone":{
    title: 'Article One | Loki',
    heading: 'Article One',
    date: 'Feb 3, 2017',
    content:`
            <p>
                This is the content for my first article.
            </p>
            <p>
                Never Give up.
            </p>`
},
"arttwo":{
    title: 'Article Two | Loki',
    heading: 'Article Two',
    date: 'Feb 3, 2017',
    content:`
            <p>
                This is the content for my Second article.
            </p>
            <p>
                Never Give up.
            </p>`},
"artthree":{
    title: 'Article Three | Loki',
    heading: 'Article Three',
    date: 'Feb 3, 2017',
    content:`
            <p>
                This is the content for my Third article.
            </p>
            <p>
                Never Give up.
            </p>`}

};

function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemp=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
            ${content}
            </div>
        </div>
    </body>

</html>`;
return htmltemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function(req,res){
    res.send(createtemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
