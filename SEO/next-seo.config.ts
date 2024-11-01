import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevStreak - Aprenda Programação de Forma Fácil e Eficiente",
    description: "Transforme seu aprendizado de programação com DevStreak. Estude diariamente com dicas práticas e um ambiente leve para evoluir suas habilidades.",
    openGraph: {
        type: "website",
        url: "https://devstreak.vercel.app/",
        title: "DevStreak - Aprenda Programação de Forma Fácil e Eficiente",
        description: "Transforme seu aprendizado de programação com DevStreak. Estude diariamente com dicas práticas e um ambiente leve.",
        images: [
            {
                url: "https://devstreak.vercel.app/Logo.svg",
                width: 500,
                height: 500,
                alt: "Logo DevStreak - Aplicativo para Aprendizado de Programação",
            }
        ],
        siteName: "DevStreak"
    },
    twitter: {
        card: "summary_large_image",
        site: "@SpaceBlog",
        creator: "@devgustavogantois | @dev_thomaz",
        title: "DevStreak - Aprenda Programação de Forma Fácil e Eficiente",
        description: "Junte-se ao DevStreak e melhore suas habilidades de programação com dicas práticas e uma abordagem leve. Experimente agora!",
        images: ['https://devstreak.vercel.app/Logo.svg'],
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: "programação, estudos, aprendizado, dicas de programação, desenvolvedor, estudo diário, DevStreak, prática de programação",
};