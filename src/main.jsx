import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
