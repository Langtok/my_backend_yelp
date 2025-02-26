import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
import { createBusiness } from "../graphql/mutations.ts";
import { useState } from "react";

function AddBusiness({ user }) {
  if (!user) return <p>You must be signed in to add a business.</p>;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Amplify.API.graphql({
      query: createBusiness,
      variables: { input: { name, category, address } },
    });
    alert("Business added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
      <input placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
      <button type="submit">Add Business</button>
    </form>
  );
}

export default AddBusiness;
