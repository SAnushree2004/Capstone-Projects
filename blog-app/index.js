import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];

app.get("/", (req, res) => {
  res.render("home.ejs", {posts: posts});
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
  const post = {
    id: uuidv4(),
    title: req.body.postTitle,
    content : req.body.postBody
  };
  posts.push(post);
  // console.log(posts);
  res.redirect("/");

});

app.get("/edit/:id",(req, res) =>{
  // console.log(req.params.id)
  const post = posts.find(p => p.id === req.params.id);
  if (post) {
    res.render("edit.ejs", { post: post });
  }
});

app.post("/edit", (req, res) => {
  const index = posts.findIndex(p => p.id === req.body.id);
  if (index !== -1) {
    posts[index].title = req.body.postTitle;
    posts[index].content = req.body.postBody;
  }
  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const index = posts.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    posts.splice(index, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});