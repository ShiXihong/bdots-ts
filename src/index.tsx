import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import App from './containers/app';
import registerServiceWorker from './utils/registerServiceWorker';
import configureStore from './store';
import rootSaga from './sagas';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { Utils } from './utils/utils';

/*
create redux store
use saga middware
*/
const store = configureStore();
store.runSaga(rootSaga);

/*
set mutiler language
*/
const oLang = Utils.getUserLanguage();
addLocaleData([...en, ...zh]);

import(`./i18n/${oLang.lang}.json`).then((module: any) => {
    ReactDOM.render(
        <IntlProvider locale={oLang.local} messages={module.default}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </IntlProvider>,
        document.getElementById('root') as HTMLElement
    );
});
registerServiceWorker();
