const Controller = require("../adapters/controller");
const HomePageService = require("../../application/service/home-page-service");

const homePageService = new HomePageService();

class GetHomePageController extends Controller {
  constructor(callback = homePageService.getHomePage) {
    super(callback);
  }
}

module.exports = GetHomePageController;
