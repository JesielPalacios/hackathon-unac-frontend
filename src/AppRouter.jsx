import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MatterCancellation } from "./components/AcademicProcesses/Components/MatterCancellation/MatterCancellation";
import { Layout } from "./components/layout/Layout";

const Home = React.lazy(() => import("./components/Home/Home"));
const AcademicProcesses = React.lazy(() =>
  import("./components/AcademicProcesses/AcademicProcesses")
);
const Reviews = React.lazy(() => import("./components/Reviews/Reviews"));
const About = React.lazy(() => import("./components/About/About"));
const LogIn = React.lazy(() => import("./components/Login/Login"));

export const AppRouter = () => {
  return (
    <Suspense fallback="Cargando...">
      <Router basename="_#">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/procesos-academicos" component={AcademicProcesses} />
            <Route path="/revisiones" component={Reviews} />
            <Route path="/nosotros" component={About} />
            <Route path="/login" component={LogIn} />
            <Route path="/cancelar-materia" component={MatterCancellation} />
            {/* <Route path="/dashboard">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
        <Route path="/usuarios">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
        <Route path="/entrevistas">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
        <Route path="/entrevista">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
      <Route path="/login">{isAuth ? <Dashboard2 /> : <LogIn />}</Route> */}
            {/* <Route component={"Not found"} /> */}
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  );
};
