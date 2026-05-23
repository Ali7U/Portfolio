export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  desc: string;
  image?: string;
  github?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "fake-store",
    title: "Fake Store",
    tagline: "Angular e-commerce app powered by the Fake Store API",
    tags: ["Angular", "PrimeNG", "Primeflex"],
    desc: "E-commerce storefront built with Angular 18 and PrimeNG, consuming the Fake Store API. Features product browsing, cart management, and a clean component-driven UI.",
    image: "/assets/Fake-Store.png",
    github: "https://github.com/Ali7U/Fake-Store",
  },
  {
    id: "email",
    title: "Email App",
    tagline: "Web-based email client built with Angular",
    tags: ["Angular", "TypeScript", "SCSS"],
    desc: "Single-page email client built with Angular 18. Component-based architecture with a clean inbox, reading, and compose interface.",
    image: "/assets/Email-App.png",
    github: "https://github.com/Ali7U/Angular_Email",
  },
  {
    id: "eshop",
    title: "EShop Modular",
    tagline: "Modular monolith reference architecture for .NET",
    tags: [".NET 8", "MediatR", "DDD", "Docker"],
    desc: "Reference implementation of CQRS and Domain-Driven Design patterns in .NET 8. Organizes an e-commerce backend into independently manageable modules with a single deployable unit, containerized with Docker.",
    github: "https://github.com/Ali7U/Eshop-Modular-Monoliths",
  },
  {
    id: "movie",
    title: "Movie App",
    tagline: "Cross-platform movie discovery app with Expo",
    tags: ["Expo", "React Native", "Appwrite", "TypeScript"],
    desc: "Cross-platform mobile app for browsing and discovering movies, built with Expo 55 and React Native. Uses Appwrite as the backend, NativeWind for styling, and file-based routing.",
    image: "/assets/movie_app.jpg",
    github: "https://github.com/Ali7U/react-native-movie-app",
  },
];
