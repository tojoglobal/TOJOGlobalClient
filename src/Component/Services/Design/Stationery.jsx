import { Helmet } from "react-helmet-async";
import ComingSoon from "../../ComingSoon/ComingSoon";

const Stationery = () => {
  return (
    <>
      <Helmet>
        <title>TOJO Global - Stationery Design</title>
      </Helmet>
      <div className="maindiv">
        <div className="container">
          <ComingSoon />
        </div>
      </div>
    </>
  );
};

export default Stationery;
