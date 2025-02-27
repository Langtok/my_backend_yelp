import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GraphQLAPI } from "@aws-amplify/api-graphql";
import { getBusiness } from "../graphql/queries.js"; // ✅ Ensure `.js` extension is used
import ReviewForm from "../components/ReviewForm.jsx";
import FavoriteButton from "../components/FavoriteButton.jsx";

function BusinessPage({ user }) {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBusiness = async () => {
      try {
        const response = await GraphQLAPI.graphql({
          query: getBusiness,
          variables: { id },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });

        if (response.data?.getBusiness) {
          setBusiness(response.data.getBusiness);
        } else {
          console.error("No data received from API");
        }
      } catch (error) {
        console.error("Error fetching business:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!business) return <p>Business not found</p>;

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
