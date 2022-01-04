import axios from "axios";

export default class PostServer {
  static async HomePageServer() {
    const response = await axios.get(
      "https://run.mocky.io/v3/f3474da5-89d0-4259-887a-2afe069d77f8"
    );
    return response;
  }
}
