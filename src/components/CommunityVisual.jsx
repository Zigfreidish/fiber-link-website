import { useEffect, useMemo, useState } from "react";

const UNSPLASH_BASE = "https://api.unsplash.com/photos/random";

const REMOTE_FALLBACKS = {
  "community creators economy":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
  "online community creators":
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1400&q=80",
  "community app":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  "online community":
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  "payment dashboard":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  "payment interface":
    "https://images.unsplash.com/photo-1551288049-bebda4d4f2d7?auto=format&fit=crop&w=1400&q=80",
  "financial dashboard":
    "https://images.unsplash.com/photo-1636957240016-d6dc6f0d9e34?auto=format&fit=crop&w=1400&q=80",
  "analytics chart":
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1400&q=80",
  "team collaboration":
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
  "digital collaboration":
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  "team building":
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  "teamwork workspace":
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
};

const isRemoteUrl = (value = "") => /^https?:\/\//.test(value);

const fallbackImage = (query = "", fallback = "/images/home-fallback.svg") => {
  const key = (query || "").toLowerCase();
  const curated = REMOTE_FALLBACKS[key];
  return curated || (isRemoteUrl(fallback) ? fallback : fallback || "/images/home-fallback.svg");
};

const CommunityVisual = ({ query, title, description, fallback }) => {
  const [src, setSrc] = useState(() => fallbackImage(query, fallback));
  const [loading, setLoading] = useState(false);
  const unsplashKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const backupSrc = useMemo(() => fallbackImage(query, fallback), [query, fallback]);

  useEffect(() => {
    setSrc(backupSrc);
    if (!unsplashKey) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const run = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${UNSPLASH_BASE}?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${unsplashKey}`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error("Unsplash unavailable");
        }
        const data = await response.json();
        const url = data?.urls?.small || backupSrc;
        if (url) {
          setSrc(url);
        }
      } catch (_error) {
        setSrc(backupSrc);
      } finally {
        setLoading(false);
      }
    };

    run();
    return () => controller.abort();
  }, [query, unsplashKey, backupSrc]);

  return (
    <figure className="visual-card">
      <div className={`visual-overlay ${loading ? "visual-loading" : ""}`} />
      <img
        src={src}
        alt={title}
        className="visual-media"
        loading="lazy"
        onError={() => setSrc(backupSrc)}
      />
      <figcaption>
        <strong>{title}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
};

export default CommunityVisual;
