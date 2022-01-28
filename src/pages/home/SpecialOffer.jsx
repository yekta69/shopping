import { useEffect, useState } from "react";
import ApiService from "../../service/apiService";
import { SpecialOffer } from "../../component/specialOffer";
export const SpecialOfferPage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    ApiService.getSpicialOffer()
      .then((res) => {
        setData((perv) => res);
        console.log("dataaa", res);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("888888", data);
  return (
    <>
      <SpecialOffer data={data} />
    </>
  );
};
