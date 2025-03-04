import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { getBusiness } from "../../graphql/queries";
import { updateBusiness } from "../../graphql/mutations";
import styles from "./EditBusiness.module.css";

export default function EditBusiness() {
  const { businessID } = useParams();
  const navigate = useNavigate();
  const [business, setBusiness] = useState({
    name: "",
    category: "",
    location: "",
    description: "",
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const response = await API.graphql(graphqlOperation(getBusiness, { id: businessID }));

        if (!response.data.getBusiness) {
          setError("Business not found.");
          return;
        }

        if (response.data.getBusiness.owner !== authUser.username) {
          setError("You are not authorized to edit this business.");
          return;
        }

        setBusiness(response.data.getBusiness);
        setPreviewUrl(response.data.getBusiness.imageUrl);
      } catch (err) {
        setError("Failed to load business details.");
        console.error("Error fetching business:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBusiness();
  }, [businessID]);

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
    setSaving(true);
    setError("");

    try {
      let updatedImageUrl = business.imageUrl;

      if (imageFile) {
        const fileName = `businessImages/${business.owner}-${Date.now()}-${imageFile.name}`;
        await Storage.put(fileName, imageFile, {
          contentType: imageFile.type,
        });
        updatedImageUrl = await Storage.get(fileName);
      }

      const updatedBusiness = {
        id: businessID,
        name: business.name,
        category: business.category,
        location: business.location,
        description: business.description,
        imageUrl: updatedImageUrl,
      };

      await API.graphql(graphqlOperation(updateBusiness, { input: updatedBusiness }));

      alert("Business updated successfully!");
      navigate(`/business/${businessID}`);
    } catch (err) {
      setError("Failed to update business.");
      console.error("Error updating business:", err);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.editBusinessContainer}>
      <h1>Edit Business</h1>
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

        <label>Upload New Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {previewUrl && <img src={previewUrl} alt="Preview" className={styles.previewImage} />}

        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
