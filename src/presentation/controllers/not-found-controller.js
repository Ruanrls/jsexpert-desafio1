class NotFoundAdapter {
  async handle(_, response) {
    response.writeHead(404, {
      "Content-Type": "application/json",
    });
    return response.end(JSON.stringify({ error: "Not found" }));
  }
}

module.exports = NotFoundAdapter;
