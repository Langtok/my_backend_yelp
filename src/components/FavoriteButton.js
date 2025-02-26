import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
import { createFavorite } from "../graphql/mutations.ts";

function FavoriteButton({ businessID, user }) {
  if (!user) return null;

  const handleFavorite = async () => {
    await Amplify.API.graphql({
      query: createFavorite,
      variables: { input: { businessID, userID: user.username } },
    });
    alert("Added to favorites!");
  };

  return <button onClick={handleFavorite}>❤️ Favorite</button>;
}

export default FavoriteButton;
