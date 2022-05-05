// <index.js> //
//==dependencies==//
const express = require('express');
const app = express();
const port = 3000;


//==setting==//
/*
ejs파일은 views 폴더에서 가져오기 때문에 
views 폴더이름을 절대로 변경해선 안된다.
*/
app.set('view engine', 'ejs');  //뷰엔진으로 ejs를 사용
app.use(express.static(__dirname + '/public'));  //정적인 파일 경로


//==routing==//
app.get('/hello', (req, res) => {
    res.render('hello', {name : req.query.nameQuery});
});

app.get('/hello/:nameParam', (req, res) => {
    res.render('hello', {name:req.params.nameQuery});
});

app.listen(port, () => {
    console.log('server on!!');
})