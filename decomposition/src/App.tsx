import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsList from "./components/NewsList";

const App: React.FC = () => (
  <div>
    <Header />
    <NewsList />
    <Footer />
  </div>
);

export default App;
