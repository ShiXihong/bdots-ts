import * as React from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends React.Component {
    render () {
        return (
            <p>This is not found page</p>
        );
    }
}

export default withRouter(NotFound);