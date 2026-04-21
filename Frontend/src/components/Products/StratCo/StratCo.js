import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAssetUrl } from "../../../utils/assetUrl";

const MAIN_TABS = [
  { key: "roofing", label: "Roofing" },
  { key: "walling", label: "Walling" },
  { key: "guttering", label: "Guttering" },
  { key: "accessories", label: "Accessories" },
];

const isAccessory = (p) => {
  const t = (p.title || "").toLowerCase();
  const id = (p.id || "").toLowerCase();
  return (
    t.includes("accessories") ||
    t.includes("fasteners") ||
    id.includes("accessories") ||
    id.includes("fasteners")
  );
};

const getBucket = (p) => {
  if (isAccessory(p)) return "accessories";
  const t = (p.type || "").toLowerCase();
  if (t === "roofing") return "roofing";
  if (t === "walling") return "walling";
  if (t === "guttering" || t === "fascia") return "guttering";
  const title = (p.title || "").toLowerCase();
  if (title.includes("gutter") || title.includes("fascia") || title.includes("downpipe"))
    return "guttering";
  if (title.includes("roof")) return "roofing";
  if (title.includes("wall")) return "walling";
  return "guttering";
};

export default function StratCo() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });
  const [activeTab, setActiveTab] = useState("roofing");
  const [searchTerm, setSearchTerm] = useState("");
  const [colorFilter, setColorFilter] = useState("any");

  useEffect(() => {
    const load = async () => {
      try {
        const apiBase = process.env.REACT_APP_API_URL || '';
        const res = await fetch(`${apiBase}/api/stratcoproducts`);
        if (!res.ok) throw new Error("Failed to fetch Stratco products");
        const json = await res.json();
        setProducts(Array.isArray(json) ? json : []);
        setStatus({ loading: false, error: null });
      } catch (e) {
        setStatus({ loading: false, error: e.message });
      }
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return products
      .filter((p) => getBucket(p) === activeTab)
      .filter(
        (p) =>
          (p.title || "").toLowerCase().includes(q) ||
          (p.type || "").toLowerCase().includes(q)
      )
      .filter((p) => {
        if (colorFilter === "any") return true;
        const arr = Array.isArray(p.colors) ? p.colors : [];
        return arr.some((c) =>
          (c?.name || "").toLowerCase().includes(colorFilter.toLowerCase())
        );
      });
  }, [products, activeTab, searchTerm, colorFilter]);

  if (status.loading) {
    return <div className="container py-5">Loading Stratco products…</div>;
  }
  if (status.error) return <div className="container py-5">Error: {status.error}</div>;

  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container pt-4">
        {/* Header */}
        <div className="text-center mx-auto" style={{ maxWidth: 840 }}>
          <img
            src="/images/colorbond-logo.svg"
            alt="Stratco"
            className="img-fluid mb-3"
            style={{ maxWidth: 180 }}
          />
          <p className="text-muted mb-0">
            Colorbond profiles, gutters, fascia, and accessories.
          </p>
          <hr className="my-4" />
        </div>

        {/* Tabs */}
        <ul className="nav nav-pills justify-content-center gap-2 mb-4 flex-wrap">
          {MAIN_TABS.map((t) => (
            <li className="nav-item" key={t.key}>
              <button
                className={`nav-link ${activeTab === t.key ? "active" : ""}`}
                onClick={() => setActiveTab(t.key)}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Filters */}
        <div className="row g-2 align-items-center mb-4">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title or type…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              className="form-control"
              placeholder="Filter by color (e.g., Surfmist)"
              value={colorFilter === "any" ? "" : colorFilter}
              onChange={(e) => setColorFilter(e.target.value || "any")}
            />
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-5">
            <p className="mb-2">No items match your selection.</p>
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setSearchTerm("");
                setColorFilter("any");
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Grid */}
        <div className="row g-4">
          {filtered.map((item) => {
            const img = item?.carouselImages?.[0] || "/images/placeholder.png";
            const colorChips = Array.isArray(item.colors) ? item.colors.slice(0, 3) : [];
            const hasDocs = Array.isArray(item.learnMoreLinks) && item.learnMoreLinks.length > 0;

            return (
              <div className="col-12 col-sm-6 col-lg-3" key={item.id}>
                <div className="h-100 card border-0 shadow-sm">
                  <div className="ratio ratio-4x3">
                    <img
                      src={getAssetUrl(img)}
                      alt={item.title}
                      className="card-img-top object-fit-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge text-bg-dark text-uppercase">{activeTab}</span>
                      {hasDocs && <span className="badge text-bg-info">Docs</span>}
                    </div>
                    <h6 className="card-title mb-2">{item.title}</h6>
                    {colorChips.length > 0 && (
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {colorChips.map((c, idx) => (
                          <div
                            key={idx}
                            title={c.name}
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              backgroundColor: c.hex || "#ccc",
                              border: "1px solid #ddd",
                            }}
                          />
                        ))}
                        {Array.isArray(item.colors) &&
                          item.colors.length > colorChips.length && (
                            <span className="text-muted small">
                              +{item.colors.length - colorChips.length} more
                            </span>
                          )}
                      </div>
                    )}
                    <Link
                      to={`/stratco/${item.id}`}
                      className="mt-auto btn btn-primary w-100"
                      aria-label={`View ${item.title}`}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
