import React from "react";
import Helmet from "react-helmet";


const ReactHelmet = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title} - My Portfolio</title>
      </Helmet>
    </div>
  );
};

export default ReactHelmet;
