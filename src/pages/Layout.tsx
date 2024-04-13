import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <section className="app-container">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
