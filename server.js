const http = require("http");
const fs = require("fs");
const path = require("path");
const host = "localhost";
const port = 8000;

const requestListener = (req, res) => {
  if (req.url === "/get") {
    let fileNameString = [];
    try {
      const fileNames = fs.readdirSync(path.join(__dirname, "files2"));
      res.writeHead(200);
      fileNames.forEach((fileName) => {
        fileNameString.push(fileName);
      });
      console.log(fileNameString.toString());
      res.end(fileNameString.toString());
    } catch (err) {
      res.writeHead(500);
      res.end("Internal server error");
    }
  } else if (req.url === "/delete") {
		res.writeHead(200);
    res.end("Success");
	} else if (req.url === "/post") {
		res.writeHead(200);
    res.end("Success");
	} else if (req.url === "/redirect") {
			res.end('Рессурс постоянно доступен по адресу /redirect')
	}
	  else {
    res.writeHead(405);
    res.end("HTTP method not allowed");
  }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Сервер запущен и доступен по адресу http://${host}:${port}`);
});
