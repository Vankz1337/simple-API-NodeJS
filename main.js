const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const username = url.searchParams.get("username");
  const password = url.searchParams.get("password");
  const params = [...url.searchParams.keys()];

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (
    req.method !== "GET" ||
    url.pathname !== "/api" ||
    !username ||
    !password ||
    params.length !== 2
  ) {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Tidak ditemukan" }));
    return;
  }

  res.writeHead(200);
  res.end(JSON.stringify({ username, password }));
});

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server berjalan di port ${port}`);
});
