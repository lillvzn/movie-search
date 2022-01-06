import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageContainer, ContentWrapper } from "./app.styles";
import { MainContextProvider } from "./contexts/mainContext";
import { routes } from "./routes";
import MobilePageTitle from "components/mobilepagetitle";
import SideNavBar from "./components/sidenavbar";
import Loader from "components/loader";

import "./css/app.css";

export default function App() {
  return (
    <Router>
      <PageContainer>
        <MainContextProvider>
          <SideNavBar />

          <ContentWrapper>
            <MobilePageTitle />

            <Suspense fallback={<Loader />}>
              <Routes>
                {routes.map((route, index) => (
                  <Route {...route} key={index} />
                ))}
              </Routes>
            </Suspense>
          </ContentWrapper>
        </MainContextProvider>
      </PageContainer>
    </Router>
  );
}
