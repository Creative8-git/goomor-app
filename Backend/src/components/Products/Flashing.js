import React, { useEffect, useState } from "react";

const Flashing = () => {
  const [flashings, setFlashings] = useState({ standard: [], custom: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlashings = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/flashings`);
        if (!response.ok) {
          throw new Error("Failed to fetch flashing options");
        }
        const data = await response.json();
        setFlashings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlashings();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Flashing Options</h2>
      <p className="text-center mb-4">
      All standard flashings are available for order in custom sizes, shapes, and colors to suit your build.
      </p>
      {/* Standard Flashing Section */}
      <div className="mb-5">
        <h3 className="mb-3">Standard Flashings</h3>
        <div className="row g-3">
          {flashings.standard.map((url, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img src={url} alt={`Standard Flashing ${index + 1}`} className="card-img-top" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Flashing Section */}
      <div>
        <h3 className="mb-3">Custom Flashings</h3>
        <div className="row g-3">
          {flashings.custom.map((url, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card">
                <img src={url} alt={`Custom Flashing ${index + 1}`} className="card-img-top" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashing;
