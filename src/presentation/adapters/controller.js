const url = require("url");

class Controller {
  constructor(callback) {
    this.callback = callback;
  }

  handle = async (request, response) => {
    const params = url.parse(request.url, true).query;
    const paramLength = Object.keys(params).length;

    try {
      const data = await this.callback(paramLength > 0 ? params : undefined);
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      return response.end(JSON.stringify(data));
    } catch (e) {
      response.writeHead(500, {
        "Content-Type": "application/json",
      });
      console.error(e);
      return response.end(
        JSON.stringify({ error: "Erro interno do servidor" })
      );
    }
  };
}

module.exports = Controller;
