import React, { useState } from "react";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { createBusiness } from "../../graphql/mutations";
import styles from "./AddBusiness.module.css";

export default function AddBusiness() {
  const [business, setBusiness] = useState({
    name: "",
    category: "",
    location: "",
    description: "",
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const authUser = await Auth.currentAuthenticatedUser();

      let uploadedImageUrl = business.imageUrl;
      if (imageFile) {
        const fileName = `businessImages/${authUser.username}-${Date.now()}-${imageFile.name}`;
        await Storage.put(fileName, imageFile, {
          contentType: imageFile.type,
        });
        uploadedImageUrl = await Storage.get(fileName);
      }

      const newBusiness = {
        ...business,
        owner: authUser.username,
        imageUrl: uploadedImageUrl,
      };

      await API.graphql(graphqlOperation(createBusiness, { input: newBusiness }));

      alert("Business added successfully!");
      setBusiness({ name: "", category: "", location: "", description: "", imageUrl: "" });
      setImageFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error("Error adding business:", error);
      setError("Failed to add business. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.addBusinessContainer}>
      <h1>Add a New Business</h1>
      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.businessForm}>
        <label>Business Name:</label>
        <input type="text" name="name" value={business.name} onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" value={business.category} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={business.location} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={business.description} onChange={handleChange} required></textarea>

        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {previewUrl && <img src={previewUrl} alt="Preview" className={styles.previewImage} />}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Adding..." : "Add Business"}
        </button>
      </form>
    </div>
  );
}
