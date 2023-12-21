import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

export const App: React.FC = () => {
  return (
    <div className="flex h-screen flex-col justify-center">
      <header className="mx-6 md:mx-40 md:border-b-2 ">
        <Header />
      </header>

      <main className="m-auto"></main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
