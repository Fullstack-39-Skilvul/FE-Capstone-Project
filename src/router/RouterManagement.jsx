import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import KonselorPage from "./layout/Konselor";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/konselor/*" element={<KonselorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
