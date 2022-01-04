import axios from "axios";

export default class PostServer {
  static async GetOll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://run.mocky.io/v3/f3474da5-89d0-4259-887a-2afe069d77f8",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response.data;
  }
}
