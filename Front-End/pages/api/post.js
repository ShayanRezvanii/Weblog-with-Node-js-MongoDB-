import fs from "fs";
import path from "path";
const handler = (req, res) => {
  if (req.method === "POST") {
    const titel = req.body.titel;
    const content = req.body.content;
    const newPost = { titel, content };
    const PostPath = path.join(process.cwd(), "data", "post.json");
    const filedata = fs.readFileSync(PostPath);
    const data = JSON.parse(filedata);
    data.push(newPost);
    fs.writeFileSync(PostPath, JSON.stringify(data));
  } else {
    const PostPath = path.join(process.cwd(), "data", "post.json");
    const filedata = fs.readFileSync(PostPath);
    const data = JSON.parse(filedata);
    res.json({ post: data });
  }
};
export default handler;
