import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import MainLayout from "./layouts";
import { Fragment } from "react";

function App() {
  return (
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          let Layout = MainLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
  );
}

export default App;
