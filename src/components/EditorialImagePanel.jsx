"use client";

import React from "react";

export default function EditorialImagePanel({
  src,
  alt,
  eyebrow,
  title,
  body,
  showCaption = true,
  className = "",
}) {
  return (
    <figure className={`editorial-image-panel ${className}`.trim()}>
      <img className="editorial-image" src={src} alt={alt} loading="lazy" />
      {showCaption ? (
        <figcaption className="editorial-copy">
          <span className="section-eyebrow">{eyebrow}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
