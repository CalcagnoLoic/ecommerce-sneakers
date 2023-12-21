import { Header } from "./components/common/Header";
import { MainContainer } from "./views/MainContainer";
import { Footer } from "./components/common/Footer";

export const App: React.FC = () => {
  return (
    <div className=" md:mx-40">
      <header className="mx-6 md:border-b-2 ">
        <Header />
      </header>

      <main className="md:py-20 md:mx-auto">
        <MainContainer />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
