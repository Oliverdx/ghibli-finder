import { Provider } from 'react-redux';
import configureAppStore from '../redux/store';
import Wrapper from '../components/wrapper';

import '../styles/globals.scss';
import '../styles/colors.scss';

const MyApp = ({ Component, pageProps }: any): React.ReactElement => {

  const store = configureAppStore({});

  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>);
};


MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be access by the client
  return { pageProps: pageProps };
}

export default MyApp;
