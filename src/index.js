import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

// Auth0の設定
const domain = "dev-l3bgegnjjxwx2od4.us.auth0.com"; // Auth0のドメイン

const clientId = "ivtgx1arN5J09Zw8yPCiEkpQ1DZ3P22e"; // Auth0のクライアントID

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "https://hiroemon-m.github.io/my-app/", // 認証後にリダイレクトするURL
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
