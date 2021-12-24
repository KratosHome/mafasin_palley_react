import axios from "axios";

export default class PostServer {
  static async HomePageServer() {
    const response = await axios.get(
      "https://run.mocky.io/v3/3968bfb0-0f61-4987-9721-23296930da41"
    );
    return response;
  }
}
