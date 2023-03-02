import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import CardContainer from './components/CardContainer';
import Error from './components/Error';
import WindowsPage from './components/WindowsPage';
import { Provider } from 'react-redux';
import store from './utils/store';
import { ShirtList, ShoeList } from './utils/helper';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import FilteredDataPage from './components/FilteredDatapage';

const App = () => {
  return (
    <Provider store ={store}>
    <div className='bg-blue-200 min-h-screen'>
      <Header />
      <Body />
    </div>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <CardContainer />,
      },
      {
        path :'cart',
        element: <Cart />,
      },
      {
        path: 'display',
        children: [
          {
            path: ':id',
            element: <WindowsPage />,
          },
          {
            path: 'tshirts',
            element: <ProductCard {...ShirtList} />,
          },
          {
            path: 'shoes',
            element: <ProductCard {...ShoeList}/>,
          },
          {
            path: 'filter',
            element: <FilteredDataPage/>,
          }
        ],
      },
    ],
  },
]);

export default App;
