import axios from "axios";
import { Urls } from "../service/Urls";

const ApiService = {
  async getNavbarData(id = 1) {
    return axios.get(Urls.navbarUrl + id).then((res) => {
      console.log("111", res.data);
      return res.data;
    });
  },
  async getSpicialOffer() {
    return axios.get(Urls.SpecialOfferUrl).then((res) => res.data);
  },
  async getProductCard() {
    return axios.get(Urls.ProductCard).then((res) => {
      console.log("ooooooo", res.data);
      return res.data;
    });
  },

  async createUser(mobilenumber) {
    return axios.post(Urls.createUser, mobilenumber).then((res) => {
      console.log("create", res);
    });
  },
  //   async createUser() {
  //     return axios.post(Urls.createUser).then;
  //   },

  // createUser: (mobileNumber) => axios.post(Urls.createUser, mobileNumber),
};
export default ApiService;
