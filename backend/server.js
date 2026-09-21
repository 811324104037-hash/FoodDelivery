const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  res.end(
    JSON.stringify({
      message: "Food Ordering Backend is running!"
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});