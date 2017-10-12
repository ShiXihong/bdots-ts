import * as React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import CategoryTitle from '../components/category-title';

const style = require('../scss/home.scss');

@injectIntl
export default class Home extends React.Component<any, any> {
    render () {
        const { intl } = this.props;

        return (
            <div className={style.home}>
                <div className={style.banner}>
                    <h1>BDots</h1>
                    <p><FormattedMessage id="SiteDescription"/></p>
                </div>
                <div className={style.content}>
                    <CategoryTitle
                        title={intl.formatMessage({id: 'LatestArticles'})}
                        description={intl.formatMessage({id: 'LatestArticlesDescription'})}
                    />
                    <p>ssss</p>
                </div>
            </div>
        );
    }
}
