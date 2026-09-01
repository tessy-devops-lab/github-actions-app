const http = require("http");

const PORT = 3000;

function greet(name) {
  return `Hello ${name}!`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Tessy! GitHub Actions + Docker + ECR is working!\n");
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { greet };
