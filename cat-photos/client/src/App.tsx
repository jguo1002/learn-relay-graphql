import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./components/RelayEnv";
import "./App.css";
import PhotoWall from "./components/PhotoWall";
import Photo from "./components/Photo";
import { Routes, Route } from "react-router-dom";

function App(props: any) {
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <Routes>
          <Route path="/" element={<PhotoWall />} />
          <Route path="/:id" element={<Photo />} />
        </Routes>
      </div>
    </Suspense>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
