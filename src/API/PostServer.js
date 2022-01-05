import axios from "axios";

export default class PostServer {
  static async GetOll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://run.mocky.io/v3/b54d6eec-006f-43da-a935-87b4b761dd9d",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response.data;
  }
  static async HomePage() {
    const response = await axios.get(
      "https://run.mocky.io/v3/f0efd7c0-1ef7-438d-8245-d92761cac672"
    );
    return response.data;
  }
}
