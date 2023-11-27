import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Header />
		<Content className={"content-grid"} />
		<Footer />
	</React.StrictMode>
);
