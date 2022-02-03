import axios from "axios";

export default class PostServer {
  static async GetOll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://run.mocky.io/v3/e9a3737a-c816-4986-a4af-b36d4c3cdf55",
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
  static async HotDell() {
    const response = await axios.get(
      "https://run.mocky.io/v3/1b637f82-0e08-4c21-974a-0526cf840727"
    );
    return response.data;
  }
  static async TestinoiaksHome() {
    const response = await axios.get(
      "https://run.mocky.io/v3/0b45bf4c-ea9a-4e43-9cd8-d0a905818988"
    );
    return response.data;
  }
  static async Instagram() {
    const response = await axios.get(
      "https://run.mocky.io/v3/fe3eefe4-690e-4418-a889-09e72cb526b7"
    );
    return response.data;
  }
}

//
