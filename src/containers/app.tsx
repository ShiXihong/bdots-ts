import * as React from 'react';

import Routes from '../route/routes';
import Header from '../components/header';
import Footer from '../components/footer';

const style = require('../scss/app.scss');

export default class App extends React.Component<any, any> {

    constructor(props: {}) {
        super(props);

        this.state = {
            userToken: null,
            isLoadingUserToken: true,
        };
    }

    async componentDidMount() {

        this.setState({isLoadingUserToken: false});
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    updateUserToken = (userToken) => {
        this.setState({
            userToken: userToken
        });
    }

    render() {
        const childProps = {
            userToken: null,
            updateUserToken: this.updateUserToken,
        };

        return !this.state.isLoadingUserToken
            && (
                <div className={style.app}>
                    <Header key="web-header"/>
                    <main key="web-main" className={style.content}>
                        <Routes childProps={childProps}/>
                    </main>
                    <Footer key="web-footer"/>
                </div>
            );
    }
}