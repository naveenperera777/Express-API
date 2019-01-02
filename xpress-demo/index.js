const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1 ,name:'course1'},
    {id:2 ,name:'course2'}
];

app.get('/',(req, res) => {
    res.send('Hello world!!!');
});

app.get('/api/courses',(req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    let course=courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Not found here');
    res.send(course);

});

app.post('/api/courses', (req,res) => {
    let course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening! ${port}`));