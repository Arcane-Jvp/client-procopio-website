interface MasonryImage {
    id: string;
    src: string;
    alt: string;
}

interface MasonryGalleryProps {
    images: MasonryImage[];
}

export default function MasonryGallery({ images }: MasonryGalleryProps) {
    return (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-4">
            {images.map((image) => (
                <div
                    key={image.id}
                    className="break-inside-avoid mb-3"
                >
                    <div className="relative overflow-hidden hover:opacity-80 transition-opacity duration-300 cursor-pointer bg-foreground-tint">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
