import { Route, Routes } from "react-router-dom";
import CreateNotes from "./Pages/CreateNotes";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/LayoutComponents/Navbar";
import Home from "./Pages/Home";
import TableGenerator from "./Pages/TableGenerator";
import TextAnalyzer from "./Pages/TextAnalyzer";
import Developer from "./Pages/Developer";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Footer from "./Components/LayoutComponents/Footer";
const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="  bg-orange-10  text-brown-500">
      <ScrollToTop />
      <LoadingBar
        color="#fdba74"
        height={5}
        shadow={true}
        waitingTime={300}
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <div className="pb-10 overflow-x-hidden overflow-hidden mx-auto max-w-screen-2xl  ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route
            path="/create-notes"
            element={<CreateNotes setProgress={setProgress} />}
          />
          <Route
            path="/text-analyzer"
            element={<TextAnalyzer setProgress={setProgress} />}
          />
          <Route
            path="/table-generator"
            element={<TableGenerator setProgress={setProgress} />}
          />
          <Route
            path="/developer"
            element={<Developer setProgress={setProgress} />}
          />
          <Route path="*" element={<ErrorPage setProgress={setProgress} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
