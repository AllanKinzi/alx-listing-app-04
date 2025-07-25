import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } 
      catch (err) {
        console.error("Error fetching property details:", err);
        if (err instanceof AxiosError) {
          setError(err.message || "Failed to load property.");
        } else {
          setError("Failed to load property.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!property) return <p>Property not found.</p>;

  return <PropertyDetail property={property} />;
}