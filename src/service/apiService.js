import axios from "axios";
import{Urls} from '../service/Urls'

const ApiService ={
    async getNavbarData() {
        return axios.get(Urls.navbarUrl
        ).then((res) => res.data);
    },
    async getSpicialOffer(){
        return axios.get(Urls.SpecialOfferUrl)
        .then((res) => res.data);
    },
    async getProductCard(){
        return axios.get(Urls.ProductCard)
        .then((res) =>{console.log(res.data); return res.data});
    }
   };
export default ApiService;