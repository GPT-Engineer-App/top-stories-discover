import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Pricing from "./pages/Pricing.jsx";
import CustomerQuotes from "./pages/CustomerQuotes.jsx";
import ProPricing from "./pages/ProPricing.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customer-quotes" element={<CustomerQuotes />} />
        <Route path="/pro-pricing" element={<ProPricing />} />
      </Routes>
    </Router>
  );
}

export default App;