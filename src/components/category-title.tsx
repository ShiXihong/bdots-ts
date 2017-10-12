import * as React from 'react';

const style = require('../scss/category-title.scss');

export default ({title, description}: any) => (
    <div className={style['category-title']}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
);