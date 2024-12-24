import http from "http";

const server http.createServer((request, response) => {
  const buildHtmlResponse = (content) => `
<html>
  <head><title>Node.js App</title></head>
  <body>${content}</body>
</html>
`;

  if (request.url === "/") {
    const content = `<h1>Welcome To Users List</h1><a href="http://localhost:3000/create-user">create user</a>`;
    response.setHeader("Content-Type", "text/html");
    response.write(buildHtmlResponse(content));
    return;
  }
  if (request.url === "/create-user") {
    const content = `
          <form method="POST" action="/create">
            <input type="text" placeholder="Name" name="user-name">
            <button type="submit">Submit</button>
          </form>
        `;
    response.setHeader("Content-Type", "text/html");
    response.write(buildHtmlResponse(content));
    return;
  }
});

server.listen(3000);