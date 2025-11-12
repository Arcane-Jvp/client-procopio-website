import type { ImgHTMLAttributes, CSSProperties } from "react";
import { useState } from "react";

interface OtimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'style'> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  srcSet?: string;
  sizes?: string;
  objectFit?: CSSProperties['objectFit'];
  aspectRatio?: string;
  containerClassName?: string;
  containerStyle?: CSSProperties;
}

export default function OtimizedImage({
  src,
  alt,
  placeholderSrc,
  srcSet,
  sizes,
  loading = "lazy",
  decoding = "async",
  objectFit = "cover",
  aspectRatio,
  className = "",
  containerClassName = "",
  containerStyle,
  ...props
}: OtimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const baseContainerStyle: CSSProperties = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    ...(aspectRatio && { aspectRatio }),
    ...containerStyle,
  };

  const placeholderStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(20px)",
    transform: "scale(1.1)",
    transition: "opacity 0.4s ease-out",
    opacity: imageLoaded ? 0 : 1,
    pointerEvents: "none",
    visibility: imageLoaded ? "hidden" : "visible",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit,
    opacity: imageLoaded ? 1 : 0,
  };

  return (
    <div className={containerClassName} style={baseContainerStyle}>
      {placeholderSrc && (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          style={placeholderStyle}
        />
      )}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={() => setImageLoaded(true)}
        className={className}
        style={imageStyle}
        {...props}
      />
    </div>
  );
}
