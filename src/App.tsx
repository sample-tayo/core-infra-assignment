import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { RootLayout } from "./components/layout";
import { ROUTES } from "./constants";
import { Error404Page } from "./pages/error-404";

const PageLoader = () => (
  <div className="fixed top-0 left-0 z-10 h-1 w-3/5 animate-loader rounded-e-lg bg-primary"></div>
);

// Card Profile routes
const CardProfilePage = lazy(() => import("./pages/card-profile"));
const CardProfileCreatePage = lazy(() => import("./pages/card-profile/create"));
const CardProfileEditPage = lazy(() => import("./pages/card-profile/edit"));
// Card Request routes
const CardRequestPage = lazy(() => import("./pages/card-request"));
const CardRequestViewPage = lazy(() => import("./pages/card-request/view"));

// Other pages (Just the dahboard landing page for now )
const DashboardPage = lazy(() => import("./pages/dashboard"));

const AppLayout = () => (
  <RootLayout>
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  </RootLayout>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* dashboard route */}
          <Route path={ROUTES.ROOT} element={<DashboardPage />} />

          {/* Card Profile routes */}
          <Route
            path={ROUTES.CARDS.PROFILE.LIST}
            element={<CardProfilePage />}
          />
          <Route
            path={ROUTES.CARDS.PROFILE.CREATE}
            element={<CardProfileCreatePage />}
          />
          <Route
            path={ROUTES.CARDS.PROFILE.EDIT}
            element={<CardProfileEditPage />}
          />

          {/* Card Request routes */}
          <Route
            path={ROUTES.CARDS.REQUEST.LIST}
            element={<CardRequestPage />}
          />
          <Route
            path={ROUTES.CARDS.REQUEST.DETAILS}
            element={<CardRequestViewPage />}
          />

          {/* Catch-all route */}
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
