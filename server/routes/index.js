import express from "express";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router.use("/", require("./routes")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
