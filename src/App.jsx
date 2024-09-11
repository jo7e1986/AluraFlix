import AppProvider from "./context/AppProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AppProvider>
      <Header />
      <Loader>
        <main className="min-h-screen text-white bg-gray-900">
          <Outlet />
        </main>
      </Loader>
      <Footer />
    </AppProvider>
  );
}

export default App;
