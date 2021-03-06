import * as React from 'react';
import { Link } from 'react-router-dom';

const style = require('../scss/footer.scss');
const qrCodeImg = require('../resources/img/weixinqrcode.png');

export default () => (
    <footer className={style.footer}>
        <div className={style['footer-content']}>
            <div className={style['footer-content-links']}>
                <div className="">
                    <h1>关于BDots</h1>
                    <p className={style.title}>生活小点滴，人生大智慧</p>
                    <p>BDots, 为自己记录生活中的点点滴滴。</p>
                </div>
                <div className="">
                    <h1>快速链接</h1>
                    <ul>
                        <li><a href="/">GitHub</a></li>
                        <li><a href="" target="_blank">博客</a></li>
                        <li><a href="/" target="_blank">论坛</a></li>
                    </ul>
                </div>
                <div className="">
                    <h1>微信号</h1>
                    <img src={qrCodeImg} alt="" title=""/>
                </div>
            </div>
            <div className={style['footer-content-copyright']}>
                <ul>
                    <li><Link to="/about">联系我们</Link></li>
                    <li><Link to="/help">帮助</Link></li>
                    <li><Link to="/feedback">反馈</Link></li>
                    <li><Link to="/test">测试</Link></li>
                </ul>
                <p>Copyright © 2016 ( 苏ICP备15007316号 )</p>
            </div>
        </div>
    </footer>
);