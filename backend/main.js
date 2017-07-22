const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT_NUM = 3000;

const VIEWS = {
    main: "index.ejs"
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render(VIEWS.main);
});

app.listen(PORT_NUM, () => console.log("Distribute the Press --> Profit"));
