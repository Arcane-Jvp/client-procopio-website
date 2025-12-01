import { type ReactNode } from "react";
import CachedImage from "@/components/atom/OtimizedImage";

interface GalleryImage {
    title: string;
    image: {
        src: string;
        srcSet?: string;
        placeholderSrc?: string;
        sizes?: string;
    };
    layout?: {
        splitWithNext?: boolean;
        padding?: string;
        height?: string;
    };
}

interface ProjectGalleryProps {
    galleryImages: GalleryImage[];
    altText: string;
}

export default function ProjectGallery({ galleryImages, altText }: ProjectGalleryProps) {
    const renderGalleryItems = (): ReactNode[] => {
        const result: ReactNode[] = [];
        let i = 0;
        while (i < galleryImages.length) {
            const image = galleryImages[i];
            if (image.layout?.splitWithNext && i + 1 < galleryImages.length) {
                const nextImage = galleryImages[i + 1];
                result.push(
                    <div key={`gallery-pair-${i}`} className="md:col-span-1 space-y-4">
                        <GalleryItem image={image} altText={altText} index={i} />
                        <GalleryItem image={nextImage} altText={altText} index={i + 1} />
                    </div>
                );
                i += 2;
            } else {
                result.push(
                    <GalleryItem key={`gallery-item-${i}`} image={image} altText={altText} index={i} />
                );
                i++;
            }
        }
        return result;
    };

    return <>{renderGalleryItems()}</>;
}

interface GalleryItemProps {
    image: GalleryImage;
    altText: string;
    index: number;
}

function GalleryItem({ image, altText, index }: GalleryItemProps) {
    return (
        <div
            role="region"
            aria-labelledby={`gallery-heading-${index}`}
            className="bg-foreground rounded-xl flex-1 pb-4 sm:pb-6 flex items-stretch flex-col"
        >
            <h2
                id={`gallery-heading-${index}`}
                className="font-title text-2xl xl:text-3xl p-4 xl:p-6"
            >
                {image.title}
            </h2>
            <div
                className="flex items-stretch justify-center flex-1 max-sm:flex-col bg-foreground-tint"
                style={
                    image.layout?.padding
                        ? { paddingTop: image.layout.padding, paddingBottom: image.layout.padding }
                        : undefined
                }
            >
                <CachedImage
                    src={image.image.src}
                    srcSet={image.image.srcSet}
                    placeholderSrc={image.image.placeholderSrc}
                    sizes={image.image.sizes}
                    alt={`${altText} - ${image.title}`}
                    objectFit="contain"
                    containerClassName={`lg:max-w-180 ${image.layout?.height === 'half' ? 'h-48' : ''}`}
                />
            </div>
        </div>
    );
}