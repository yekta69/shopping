import axios from "axios";
import{Urls} from '../service/Urls'

const ApiService ={
    async getNavbarData() {
        return axios.get("https://localhost:44342/api/User/Getuser?id=1"
        ).then((res) => res.data);
    }
   };
export default ApiService;