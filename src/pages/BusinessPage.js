import { API } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import FavoriteButton from "../components/FavoriteButton";

function BusinessPage({ user }) {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    Amplify.API.graphql({ query: getBusiness, variables: { id } }).then((response) => {
      setBusiness(response.data.getBusiness);
    });
  }, [id]);

  if (!business) return <p>Loading...</p>;

  return (
    <div>
      <h1>{business.name}</h1>
      <p>{business.category}</p>
      <p>{business.address}</p>
      <p>⭐ {business.rating}/5</p>
      <FavoriteButton businessID={id} user={user} />
      <ReviewForm businessID={id} user={user} />
    </div>
  );
}

export default BusinessPage;
