const http = require("http");

const PORT = 3000;

function greet(name) {
  return `Hello ${name}!`;
}

const server = http.createServer((req, res) => {
  res.destroy();
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { greet };
