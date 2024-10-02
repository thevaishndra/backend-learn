import express from 'express';
//if we do import express statement without adding type in package.json, it throws error
//it means we want to assemble all these files like modules and not like common js
const app = express();
app.get('/', (req, res) => {
    res.send('server is ready');
})

//get a list of jokes


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    }
);