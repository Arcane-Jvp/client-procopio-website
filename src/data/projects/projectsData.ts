import type { ResponsiveImageUrls } from "@/utils/cloudinary";
import { getResponsiveImageUrls } from "@/utils/cloudinary";

type ImageSize = "small" | "large";
type GalleryLayout = {
  height?: "full" | "half";
  splitWithNext?: boolean;
  padding?: string;
};
type GalleryItem = {
  title: string;
  image: ResponsiveImageUrls;
  layout?: GalleryLayout;
};

const buildImage = (publicId: string, size: ImageSize) =>
  getResponsiveImageUrls({ publicId, size });

const buildGalleryItem = (
  title: string,
  publicId: string,
  size: ImageSize = "large",
  layout?: GalleryLayout
): GalleryItem => ({
  title,
  image: buildImage(publicId, size),
  ...(layout ? { layout } : {}),
});

// Main image URLs
export const babyDriverPosterImage = buildImage(
  "Final_Poster_Retrato_cuoljq.png",
  "large"
);

export const porschePosterImage = buildImage("Final_Porsche_usvyhi.png", "large");

export const hazardPosterImage = buildImage("Hazard-t5_emyzhb.png", "large");

export const commentLogoMP = buildImage(
  "IMG_20250830_164119-1x1_fdfxbz.jpg",
  "small"
);

// Gallery images definitions
const babyDriverGallery: GalleryItem[] = [
  buildGalleryItem("Foto base", "Base_Poster_Retrato_xtp8hc.jpg"),
  buildGalleryItem("Foto editada", "Edit_Poster_Retrato_iiu9ww.png"),
  buildGalleryItem("Conteúdo textual", "Texto_Poster_Retrato_lq41yw.png"),
];

const porscheGallery: GalleryItem[] = [
  buildGalleryItem("Fundo", "Fundo_Porsche_wjwsig.png"),
  buildGalleryItem("Conteúdo textual", "Texto_Porsche_yg5ijc.png"),
  buildGalleryItem("Foto sem edição", "Porche_snbcjv.png", "large", {
    splitWithNext: true,
    height: "half",
  }),
  buildGalleryItem("Foto editada", "Edit_Porsche_h02aj8.png", "large", {
    height: "half",
    padding: "1rem",
  }),
];

const hazardGallery: GalleryItem[] = [
  buildGalleryItem("Fundo", "Fundo_Hazard-t5_sx1slm.png"),
  buildGalleryItem("Personagem", "Personagem_Hazard-t5_sc8gds.png"),
  buildGalleryItem("Conteúdo textual", "Texto_Hazard-t5_dzn9en.png"),
];

export const projectsGallery = {
  babyDriver: babyDriverGallery,
  porsche: porscheGallery,
  hazard: hazardGallery,
};

