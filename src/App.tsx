import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <header>
        <Header />
      </header>

      <main className="m-auto"></main>

      <footer>
        <Footer />
      </footer>
    </div >
  );
};
