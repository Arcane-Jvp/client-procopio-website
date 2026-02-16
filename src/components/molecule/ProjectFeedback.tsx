import type { FC } from "react";
import type { ProjectItem } from "@/data/projects";
import CachedImage from "@/components/atom/OtimizedImage";

type Comment = NonNullable<NonNullable<ProjectItem["content"]>["comments"]>[number];

interface Props {
    comments?: Comment[];
    headingId?: string;
}

const sanitizeKey = (value: string) => value.replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase();

const ProjectFeedback: FC<Props> = ({ comments = [], headingId = "feedback-heading" }) => {
    if (comments.length === 0) return null;

    return (
        <section
            className="bg-foreground rounded-xl p-4 xl:p-6 space-y-3"
            aria-labelledby={headingId}
        >
            <h2 id={headingId} className="font-title text-2xl xl:text-3xl">
                Feedback do cliente
            </h2>
            <ul role="list" className="space-y-4">
                {comments.map((comment) => {
                    const key = `${sanitizeKey(comment.name)}-${sanitizeKey(comment.date)}`;
                    return (
                        <li
                            key={key}
                            className="flex items-start space-x-3 space-y-4 flex-col"
                        >
                            <div className="flex space-x-4">
                                <div className="rounded-full overflow-hidden shrink-0 w-12 h-12">
                                    <CachedImage
                                        src={comment.photo.src}
                                        srcSet={comment.photo.srcSet}
                                        placeholderSrc={comment.photo.placeholderSrc}
                                        sizes={comment.photo.sizes}
                                        alt={comment.name}
                                        objectFit="cover"
                                        containerClassName="w-full h-full rounded-full"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-primary text-lg">{comment.name}</p>
                                    <p className="text-base text-primary/30">{comment.date}</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="bg-primary/5 rounded-lg sm:rounded-2xl">
                                    <div className="relative">
                                        <svg
                                            width="30"
                                            height="12"
                                            viewBox="0 0 30 12"
                                            aria-hidden="true"
                                            className="absolute -top-3 left-2.5 text-primary/5"
                                        >
                                            <polygon points="15,0 7.5,12 22.5,12" fill="currentColor" />
                                        </svg>
                                        <p className="mt-2 text-primary py-2 px-3 sm:py-3 sm:px-5 text-lg">{comment.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default ProjectFeedback;
