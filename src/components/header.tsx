import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const style = require('../scss/header.scss');

@withRouter
@connect((state: any) => ({
    state: state.header
}))
export default class Header extends React.Component<any, any> {

    constructor(props: {}) {
        super(props);
        this.handleCollection = this.handleCollection.bind(this);
    }

    handleLogout = event => {
        this.props.history.push('/');
    }

    handleCollection = event => {
        //
    }

    render() {
        const {state} = this.props;

        return (
            <header className={style.header}>
                <div className={style['header-content']}>
                    <div className={style['header-left']}>
                        <ul>
                            <li><Link to="/test"> <FormattedMessage id="Home" /> </Link></li>
                            <li><Link to="/test"> <FormattedMessage id="Forum" /></Link></li>
                            <li><Link to="/test"> <FormattedMessage id="Blog" /></Link></li>
                        </ul>
                    </div>
                    <div className={style['header-right']}>
                        <ul>
                            <li>
                                {
                                    state.userInfo
                                        ? <Link to={`/profile/${state.userInfo.account}`}>
                                            <FormattedMessage id="Welcome" values={{name: state.userInfo.account}}/>
                                        </Link>
                                        : <Link to="/login"><FormattedMessage id="Login"/></Link>
                                }
                            </li>
                            <li>
                                {
                                    state.userInfo
                                        ? <Link to="/profile"><FormattedMessage id="Profile"/></Link>
                                        : <Link to="/register"><FormattedMessage id="Register"/></Link>
                                }

                            </li>
                            <li>
                                <a onClick={this.handleCollection} href="javascript:void(0)">
                                    <FormattedMessage id="Collect"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}