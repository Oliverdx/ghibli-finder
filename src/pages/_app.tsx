import { Provider } from 'react-redux';
import configureAppStore from '../redux/store';

import '../styles/globals.scss';
import '../styles/colors.scss';

function MyApp ({ Component, pageProps }): JSX.Element {

  const store = configureAppStore({});

  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>);
}

export default MyApp;
