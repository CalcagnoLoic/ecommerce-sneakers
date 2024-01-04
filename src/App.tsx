import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="md:mx-32 lg:mx-24 xl:mx-40">
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
};
