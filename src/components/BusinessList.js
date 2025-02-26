import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
// import { listBusinesses } from "../graphql/queries";
import { listBusinesses } from "../graphql/queries.ts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    Amplify.API.graphql({ query: listBusinesses }).then((response) => {
      setBusinesses(response.data.listBusinesses.items);
    });
  }, []);

  return (
    <div>
      {businesses.map((biz) => (
        <div key={biz.id}>
          <h2>{biz.name}</h2>
          <p>{biz.category}</p>
          <p>⭐ {biz.rating}/5</p>
          <Link to={`/business/${biz.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

export default BusinessList;
