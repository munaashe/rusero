import { AnyAaaaRecord } from 'dns';
import * as React from 'react';
import { useRoutes } from 'react-router-dom'

const Loader = (Component: any) => (props: any) =>
(
  <React.Suspense >
    <Component {...props} />
  </React.Suspense>
);

const Landing = Loader(React.lazy(() => import('./pages/landing')));

const Personal = Loader(React.lazy(() => import('./pages/personal')));

const Projects = Loader(React.lazy(() => import('./pages/projects')));

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/denis',
      element: <Personal />,
    },
    {
      path: '/dream',
      element: <Projects />
    }
  ])
  return element;
}

export default App;
