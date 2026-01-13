import { useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "@/data/projects";
import ProjectDescription from "@/components/molecule/ProjectDescription";
import ColorPalette from "@/components/molecule/ColorPalette";
import ProjectHeader from "@/components/organism/ProjectHeader";
import CachedImage from "@/components/atom/OtimizedImage";
import ProjectGallery from "@/components/molecule/ProjectGallery";
import ProjectFeedback from "@/components/molecule/ProjectFeedback";
import SEO from "@/components/molecule/Seo";
import type { ProjectItem } from "@/data/projects";

export default function ProjectPage() {
  const { id } = useParams<{ id?: string }>();

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  const project = useMemo<ProjectItem | undefined>(
    () => projects.find((p) => p.id === id),
    [id]
  );

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Projeto não encontrado</h1>
        <p className="mb-4">
          Não foi possível localizar o projeto com ID “{id}”.
        </p>
        <Link to="/projetos" className="text-primary underline">
          Voltar para projetos
        </Link>
      </main>
    );
  }

  const altText = project.alt ?? project.title ?? "Projeto";

  // Índice e navegação entre projetos (anterior/próximo)
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  // Navegação circular: se não houver anterior/próximo, volta para o último/primeiro respectivamente
  const prevProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : projects[projects.length - 1];
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": typeof project.src === "string" ? project.src : undefined,
    "author": {
      "@type": "Person",
      "name": "Procópio"
    }
  };

  return (
    <>
      <SEO
        title={project.title}
        description={
          project.description ||
          `Projeto ${project.title} desenvolvido por Procópio.`
        }
        image={typeof project.src === "string" ? project.src : undefined}
        url={`https://portcopio.vercel.app/projeto/${project.id}`}
        type="article"
        schema={projectSchema}
      />
      <main className="max-w-400 min-h-[calc(100vh-4rem)] mx-auto p-5 mt-16 text-primary space-y-4">
      <ProjectHeader
        projectId={project.id}
        prevProject={prevProject}
        nextProject={nextProject}
      />

      <div className="flex items-stretch justify-center max-lg:space-y-4 lg:space-x-4 max-lg:flex-col">
        {typeof project.src === "string" ? (
          <CachedImage
            src={project.src}
            srcSet={project.srcSet}
            placeholderSrc={project.placeholderSrc}
            sizes={project.sizes}
            alt={altText}
            objectFit="contain"
            containerClassName="lg:max-w-180"
          />
        ) : (
          <div
            role="img"
            aria-label={altText}
            className="p-6 lg:max-w-180 w-full bg-foreground rounded-xl"
          >
            {project.src}
          </div>
        )}

        <div className="space-y-4 flex items-stretch flex-col">
          <ProjectDescription
            title={project.title}
            description={project.description ?? undefined}
          />
          <ColorPalette
            colors={project.content?.palette as string[] | undefined}
          />
          {project.content?.comments && (
            <ProjectFeedback
              comments={project.content?.comments ?? []}
              headingId="feedback-heading"
            />
          )}
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectGallery
          galleryImages={project.content?.galleryImages || []}
          altText={altText}
        />
      </div>
    </main>
    </>
  );
}
