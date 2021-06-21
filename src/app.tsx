import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/spinner/spinner';
import useAuth, { AuthContext } from './hooks/useAuth';
import { store } from './redux/store';
import MainRouter from './routes/mainRouter';
import useThemeStyles from './themes/styles';

const App = () => {
  const auth = useAuth();
  const themeClasses = useThemeStyles();

  return (
    <Provider store={store}>
      <AuthContext.Provider value={auth}>
        <MainRouter />
        <ToastContainer className={themeClasses.toast} />
      </AuthContext.Provider>
      <Spinner />
    </Provider>
  );
};

export default App;
