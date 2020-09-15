import { Provider } from 'react-redux';
import configureAppStore from '../redux/store';

import '../styles/globals.scss';
import '../styles/colors.scss';

const MyApp = ({ Component, pageProps }: any): React.ReactElement => {

  const store = configureAppStore({});

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>);
};

export default MyApp;
