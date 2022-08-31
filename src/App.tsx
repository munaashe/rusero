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
const Philosophy = Loader(React.lazy(()=> import('./pages/philosophy')));
const Plan = Loader(React.lazy(()=> import('./pages/plan')));

const Projects = Loader(React.lazy(() => import('./pages/projects')));

const PersonalLayout = Loader(React.lazy(()=> import('./layouts/PersonalLayout')))

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: 'denis',
      element: <Projects />,
    },
    {
      path: 'dream',
      element: <PersonalLayout />,
      children: [
        {
          path: '',
          element: <Personal/>
        },
        {
          path: 'philosophy',
          element: <Philosophy/>,
        },
        {
          path: 'plan',
          element: <Plan/>
        }
      ]
    }
  ])
  return element;
}

export default App;
