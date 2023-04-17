import * as React from 'react';
import { useRoutes } from 'react-router-dom'

const Loader = (Component: any) => (props: any) =>
(
  <React.Suspense >
    <Component {...props} />
  </React.Suspense>
);


const Personal = Loader(React.lazy(() => import('./pages/personal')));
const Blog = Loader(React.lazy(() => import('./pages/blog')));
const Article = Loader(React.lazy(() => import('./pages/Article')));


const PersonalLayout = Loader(React.lazy(() => import('./layouts/PersonalLayout')))

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <PersonalLayout />,
      children: [
        {
          path: '',
          element: <Personal />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog/:ID',
          element: <Article />

        }
      ]
    }
  ])
  return element;
}

export default App;
