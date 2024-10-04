import express from 'express';
//if we do import express statement without adding type in package.json, it throws error
//it means we want to assemble all these files like modules and not like common js
const app = express();
app.get('/', (req, res) => {
    res.send('server is ready');
})

//get a list of jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        title: "First joke",
        content: "This is first joke",
      },
      {
        id: 2,
        title: "Second joke",
        content: "This is second joke",
      },
      {
        id: 3,
        title: "Third joke",
        content: "This is third joke",
      },
      {
        id: 4,
        title: "Fourth joke",
        content: "This is fourth joke",
      },
      {
        id: 5,
        title: "Fifth joke",
        content: "This is fifth joke",
      }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    }
);