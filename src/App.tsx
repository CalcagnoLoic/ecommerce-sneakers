import { Header } from "./components/common/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/common/Footer";

export const App: React.FC = () => {
  return (
    <div className="md:mx-32 lg:mx-24 xl:mx-40">
      <header className="mx-6 md:border-b-2 ">
        <Header />
      </header>

      <main className="flex justify-center md:mx-6 md:py-20 lg:mx-auto">
        <MainContent />
      </main>

      <footer className="mt-3 lg:mt-0">
        <Footer />
      </footer>
    </div>
  );
};
