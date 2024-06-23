import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SocketProvider from "./Providers/SocketProvider.tsx";
// import SocketProvider from "./Providers/Socket.tsx";
// import PeerProvider from "./Providers/peer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketProvider>
        {/* <PeerProvider> */}
          <App />
        {/* </PeerProvider> */}
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
