import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import CachedImage from "@/components/atom/OtimizedImage";

interface MasonryImage {
  id: string;
  src: string | ReactNode;
  alt?: string;
  srcSet?: string;
  placeholderSrc?: string;
  sizes?: string;
  gridLayout?: {
    height?: 'full' | 'half';
    splitWithNext?: boolean;
  };
}

interface MasonryGalleryProps {
  images: MasonryImage[];
}

export default function MasonryGallery({ images }: MasonryGalleryProps) {
  const renderImage = (image: MasonryImage) => (
    <Link
      to={`/projetos/${image.id}`}
      className={`block relative overflow-hidden hover:opacity-80 transition-opacity duration-200 cursor-pointer bg-foreground-tint focus:outline-none focus:ring ${
        image.gridLayout?.height === 'half' ? 'h-48' : ''
      }`}
      aria-label={
        image.alt
          ? `Abrir projeto: ${image.alt}`
          : `Abrir projeto ${image.id}`
      }
    >
      {typeof image.src === "string" ? (
        <CachedImage
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.sizes}
          placeholderSrc={image.placeholderSrc}
          alt={image.alt || ""}
          className="w-full h-full object-cover"
          fetchPriority="low"
        />
      ) : (
        <div
          className="w-full h-full p-4 flex items-center justify-center"
          aria-label={image.alt}
          role={image.alt ? "img" : undefined}
        >
          {image.src}
        </div>
      )}
    </Link>
  );

  const renderItems = () => {
    const result: ReactNode[] = [];
    let i = 0;
    while (i < images.length) {
      const image = images[i];
      if (image.gridLayout?.splitWithNext && i + 1 < images.length) {
        const nextImage = images[i + 1];
        result.push(
          <div
            key={`pair-${image.id}-${nextImage.id}`}
            className="flex gap-3 mb-3 break-inside-avoid"
            style={{ contain: "content" }}
          >
            <div className="flex-1">
              {renderImage(image)}
            </div>
            <div className="flex-1">
              {renderImage(nextImage)}
            </div>
          </div>
        );
        i += 2;
      } else {
        result.push(
          <div
            key={image.id}
            className="break-inside-avoid mb-3"
            style={{ contain: "content" }}
          >
            {renderImage(image)}
          </div>
        );
        i++;
      }
    }
    return result;
  };

  return (
    <div
      className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-4"
      style={{ contain: "layout style paint" }}
    >
      {renderItems()}
    </div>
  );
}
