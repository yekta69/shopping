import { useEffect, useState } from "react";
import ApiService from "../../service/apiService";
import { SpecialOffer } from "../../component/specialOffer";
export const SpecialOfferPage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    ApiService.getSpicialOffer()
      .then((res) => {
        setData((perv) => res);
        
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <SpecialOffer data={data} />
    </>
  );
};
