import React, { useContext } from "react";
import { Oval } from "react-loader-spinner";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Loading = () => {
  const { loading } = useContext(AuthContext);

  //show loading in private route.
  if (loading) {
    return (
      <div className="flex justify-center mt-32 mb-32">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
};

export default Loading;
