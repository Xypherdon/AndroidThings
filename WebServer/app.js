//Load HTTP module
const http = require("http");
const hostname = "192.168.100.25";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type

  if (req.method == "POST") {
    console.log("POST");
    var body = "";
    req.on("data", function (data) {
      body += data;
      console.log("Partial body: " + body);
    });
    req.on("end", function () {
      console.log("image received");
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end("post received");
    });
  } else {
    console.log("GET");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
