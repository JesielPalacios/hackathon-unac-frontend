import React, { Suspense, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { MatterCancellation } from './components/1.MatterCancellation/MatterCancellation'
import { useUser } from './core/hooks/useUser'

const Home = React.lazy(() => import('./components/Home/Home'))
const AcademicProcesses = React.lazy(() => import('./components/AcademicProcesses/AcademicProcesses'))
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'))
const About = React.lazy(() => import('./components/About/About'))
const LogIn = React.lazy(() => import('./components/Login/Login'))

export const AppRouter = () => {
  const { isAuth } = useUser()

  return (
    <Suspense fallback="Cargando...">
      <Router basename="_#">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* 
            <Route path="/dashboard">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
            <Route path="/usuarios">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
            <Route path="/entrevistas">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
            <Route path="/entrevista">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>        
            */}
            <Route path="/procesos-academicos" component={AcademicProcesses} />
            <Route path="/revisiones" component={isAuth ? Reviews : LogIn} />
            <Route path="/nosotros" component={About} />
            <Route path="/cancelar-materia" component={isAuth ? MatterCancellation : LogIn} />
            <Route path="/login">{isAuth ? <Home /> : <LogIn />}</Route>
            {/* <Route component={"Not found"} /> */}
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}
