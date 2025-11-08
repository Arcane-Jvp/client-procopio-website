import type { ReactNode } from 'react';
import { useMemo } from 'react';

interface MasonryImage {
    id: string;
    // src can be a string (image URL) or a React node (inline SVG/component)
    src: string | ReactNode;
    alt?: string;
}

interface MasonryGalleryProps {
    images: MasonryImage[];
}

export default function MasonryGallery({ images }: MasonryGalleryProps) {
    const shuffledImages = useMemo(() => {
        const shuffled = [...images];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }, [images]);

    return (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-4">
            {shuffledImages.map((image) => (
                <div key={image.id} className="break-inside-avoid mb-3">
                    <div className="relative overflow-hidden hover:opacity-80 transition-opacity duration-300 cursor-pointer bg-foreground-tint">
                        {typeof image.src === 'string' ? (
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        ) : (
                            // render React node (SVG/component). Provide aria-label if alt is present.
                            <div className="w-full h-auto p-4" aria-label={image.alt} role={image.alt ? 'img' : undefined}>
                                {image.src}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
