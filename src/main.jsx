import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
      }}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
