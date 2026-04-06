import { useEffect, useMemo, useState } from "react";

const UNSPLASH_BASE = "https://api.unsplash.com/photos/random";

const fallbackImage = (path) =>
  path || "/images/home-fallback.svg";

const CommunityVisual = ({ query, title, description, fallback }) => {
  const [src, setSrc] = useState(fallbackImage(fallback));
  const [loading, setLoading] = useState(false);
  const unsplashKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const cacheKey = useMemo(() => `${query}-${unsplashKey ? "remote" : "fallback"}`, [query, unsplashKey]);

  useEffect(() => {
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
        const url = data?.urls?.small || fallback;
        if (url) {
          setSrc(url);
        }
      } catch (_error) {
        setSrc(fallbackImage(fallback));
      } finally {
        setLoading(false);
      }
    };

    run();
    return () => controller.abort();
  }, [query, unsplashKey, cacheKey, fallback]);

  return (
    <figure className="visual-card">
      <div className={`visual-overlay ${loading ? "visual-loading" : ""}`} />
      <img src={src} alt={title} className="visual-media" loading="lazy" onError={() => setSrc(fallbackImage(fallback))} />
      <figcaption>
        <strong>{title}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
};

export default CommunityVisual;
