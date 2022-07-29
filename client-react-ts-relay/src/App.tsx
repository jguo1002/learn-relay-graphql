import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./components/RelayEnv";
import "./App.css";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";
import { Routes, Route } from "react-router-dom";

function App(props: any) {
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/:id" element={<Character />} />
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
