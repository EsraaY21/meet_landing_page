import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Meetings from "./components/Meetings";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Meetings />
      </main>
      <Footer />
    </>
  );
}

export default App;
