import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Attributes from "./components/Attributes";
import AchievementsSection from "./components/AchievementsSection"; // Ensure correct path
import Toolbox from "./components/Toolbox"; // Ensure correct path
import AnimatedTestimonials from "./components/AnimatedTestimonialsfinal"; // Ensure correct path
import HoverRevealComponent from "./components/HoverRevealComponent"; // Ensure correct path

export default function Home() {
  const testimonialsData = [
    {
      src: "/images/projects/crime.png", // Image URL
      name: "Crime Patrol Website",
      designation: "A crime-mapping Dashboard",
      quote:
        "A web app to visualize crime data on an interactive map, helping to analyze crime trends.",
    },
    {
      src: "/images/projects/pinterest.png", // Image URL
      name: "Picture Sharing Website",
      designation: "A picture sharing website",
      quote:
        "A picture sharing platform with Cloudinary integration to manage and upload images.",
    },
    {
      src: "/images/projects/song.png", // Image URL
      name: "Music Player",
      designation: "A music player with Spotify API",
      quote:
        "A music player built with the Spotify API to stream songs and create custom playlists.",
    },
    {
      src: "/images/projects/khoj.jpg", // Image URL
      name: "KHOJ Search Engine",
      designation: "Intelligent document retrieval system",
      quote:
        "A Flask-powered search engine with fuzzy matching, live CSV updates, and TF-IDF ranking for precise results.",
    },
    {
      src: "/images/projects/currency.png", // Image URL
      name: "Currency Exchange",
      designation: "A currency converter integrating API",
      quote:
        "A currency exchange application that fetches live exchange rates using an external API.",
    },
    {
      src: "/images/projects/netflix.png", // Image URL
      name: "Netflix Homepage",
      designation: "A Responsive Netflix homepage",
      quote:
        "A responsive version of Netflix's homepage with dynamic content and CSS animations.",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden">
      <Navbar />
      <div className="container mt-24 mx-auto px-10 py-4 overflow-hidden">
        <HeroSection />
        <AboutSection />
        <Attributes />
        <AchievementsSection />
        <HoverRevealComponent />
        <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
        <Toolbox />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
//
