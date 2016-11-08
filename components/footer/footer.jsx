import React from 'react';
import Link from '../link/link';
import Container from '../container/container';
import Icon from '../../assets/icon-square-small.svg';
import './footer-style';

export default (props) => {
  return (
    <div className="footer">
      <Container className="footer__inner">
        <section className="footer__left">
          <Link className="footer__link" to="/get-started">起步</Link>
          <Link className="footer__link" to="/analyze">分析</Link>
          <Link className="footer__link" to="/contribute">贡献</Link>
          <Link className="footer__link" to="/comparison">比较</Link>
        </section>

        <section className="footer__middle">
          <Link to="/" className="footer__icon">
            <img src={ Icon } />
          </Link>
        </section>

        <section className="footer__right">
          <Link className="footer__link" to="/branding">品牌</Link>
          <Link className="footer__link" to="//gitter.im/webpack/webpack">支持</Link>
          <Link className="footer__link" to="https://github.com/webpack/webpack/releases">更新日志</Link>
          <Link className="footer__link" to="/license">遵循协议</Link>
        </section>
      </Container>
    </div>
  );
};
