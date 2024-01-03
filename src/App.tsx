import Header from "./components/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="md:mx-32 lg:mx-24 xl:mx-40">
      <header className="mx-6 md:border-b-2 ">
        <Header />
      </header>

      <main className="flex justify-center md:mx-6 md:py-20 lg:mx-auto">
        <MainContent />
      </main>

      <Footer />
    </div>
  );
};
