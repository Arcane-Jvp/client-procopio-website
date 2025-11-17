import type { ReactNode } from "react";

import type { ResponsiveImageUrls } from "@/utils/cloudinary";
import LogoMl from "@/components/atom/LogoMl";
import { getResponsiveImageUrls } from "@/utils/cloudinary";

export interface ProjectItem {
  id: string;
  src: string | ReactNode;
  alt?: string;
  title?: string;
  description?: string;
  content?: {
    palette: string[];
    galleryImages: { title: string; image: ResponsiveImageUrls }[];
  };
  srcSet?: string;
  placeholderSrc?: string;
  sizes?: string;
}

// Image URLs
const babyDriverPosterImage = getResponsiveImageUrls({
  publicId: "Final_Poster_Retrato_cuoljq.png",
  size: "large",
});

const babyDriverBaseImage = getResponsiveImageUrls({
  publicId: "Base_Poster_Retrato_xtp8hc.jpg",
  size: "large",
});

const babyDriverEditedImage = getResponsiveImageUrls({
  publicId: "Edit_Poster_Retrato_iiu9ww.png",
  size: "large",
});

const porschePosterImage = getResponsiveImageUrls({
  publicId: "Final_Porsche_usvyhi.png",
  size: "large",
});

const hazardPosterImage = getResponsiveImageUrls({
  publicId: "Hazard-t5_emyzhb.png",
  size: "large",
});

export const projects: ProjectItem[] = [
  {
    id: "1",
    ...babyDriverPosterImage,
    alt: "Pôster do filme Baby Driver",
    title: "Pôster Em Ritmo de Fuga",
    description:
      "Projeto desenvolvido na disciplina de Introdução à Tipografia. Objetivo: criar um retrato tipográfico do personagem principal do filme Em Ritmo de Fuga (Baby Driver). Construção da imagem utilizando apenas frases, palavras e atributos que representam a persona do personagem. A composição explora o contraste entre cores vibrantes e a silhueta escura. Resultado: peça que une linguagem textual e identidade visual, mostrando a tipografia como forma expressiva.",
    content: {
      palette: ["#1D1D1B", "#D93250", "#E0D8A3", "#D7D0BE"],
      images: [babyDriverBaseImage, babyDriverEditedImage],
    },
  },
  {
    id: "2",
    src: (
      <LogoMl
        className="w-full h-auto text-logo"
        ariaLabel="Logotipo do Marcos Pilgrim"
      />
    ),
    alt: "Logotipo do Marcos Pilgrim",
    title: "Logotipo ML",
    description:
      "Logo desenvolvida para uso pessoal de um cliente. Construída a partir das iniciais do nome do cliente, no caso o M e L. Estruturada com simetria geométrica para transmitir equilíbrio, precisão e profissionalismo. Inclui estrelas de quatro pontas como referência a logos anteriores do cliente. Resultado: identidade visual que une modernidade e resgate histórico da marca pessoal do cliente.",
    content: {
      palette: [],
      images: [],
    },
  },
  {
    id: "3",
    ...porschePosterImage,
    alt: "Pôster do carro Porsche 911 GT3",
    title: "Pôster Porsche 911 GT3",
    description:
      "Peça gráfica inspirada no modelo Porsche 911 GT3. A imagem do veículo foi capturada no jogo Forza Horizon 5. Todas informações utilizadas foram baseadas no site oficial da Porsche, garantindo autenticidade. A composição destaca o caráter esportivo do modelo por meio de: > Paleta de cores quase monocromática. > Equilíbrio visual. > Clareza informativa. Resultado: pôster que une simplicidade estética e valorização dos atributos do veículo.",
    content: {
      palette: ["#46518C", "#79A2F2", "#57B7F2", "#D96704", "#F2F2F2"],
      images: [],
    },
  },
  {
    id: "4",
    ...hazardPosterImage,
    alt: "Pôster do RPG Hazard: Mundo Titânico",
    title: "Pôster Hazard Mundo Titânico",
    description:
      "Pôster desenvolvido em parceria com o artista Itzo responsável pela ilustração do personagem Hazard. Projeto criado para divulgar o RPG Mundo Titânico, ainda em produção. A composição explora: > Uso expressivo da tipografia. > Forte contraste de cores para destaque visual. > Aplicação de texturas para dar identidade e diferenciação. Resultado: peça promocional que valoriza o personagem principal e fortalece a divulgação do universo do RPG.",
    content: {
      palette: ["#3B0273", "#2E0259", "#F2E638", "#F20505", "#A60303"],
      images: [],
    },
  },
];

export default projects;
