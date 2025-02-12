import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Hello } from "../components/Hello";

// Lazy load pages
const EnglishPage = lazy(() => import("../pages/EnglishPage"));
const RussianPage = lazy(() => import("../pages/RussianPage"));

export const AppRouter = () => {
  return (
    <Suspense fallback={<div style={{ textAlign: "center" }}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/en" element={<EnglishPage />} />
        <Route path="/ru" element={<RussianPage />} />
      </Routes>
    </Suspense>
  );
};
