import React, { useState } from 'react';
import Flexbox from '../../common/containers/Flexbox';
import '../common/css/styles.css';
import './styles.css';
import HomeView from '../views/HomeView';

export default function HomePage(props) {
  const [view, selectView] = useState('home');

  const renderedView = () => {
    switch (view.toLowerCase()) {
      case 'home':
        return <HomeView />;
      case 'analytics':
        return <div>Hello World</div>;
      default:
        return <HomeView />;
    }
  };

  return (
    <Flexbox
      style={{ flexDirection: 'column' }}
      className="pageContent spaceBlueBackground fillsContainerArea"
    >
      <>
        <div className="view">{renderedView()}</div>
      </>
      <>
        <section className="tabs ">
          <a className="tab-link" href="data" title="Resume">
            <i className="fas fa fa fa-user" />
          </a>
          <a className="tab-link" href="https://github.com/mmacheerpuppy" title="GitHub">
            <i className="fab fa fa-github" />
          </a>
          <span
            role="menuitem"
            className="tab-link"
            style={{ cursor: 'pointer' }}
            title="Analytics"
            onClick={() => selectView('analytics')}
            onKeyPress={() => selectView('analytics')}
          >
            <i className="far fa fa fa-signal" />
          </span>
          <a className="tab-link " href="https://progdisc.club/" title="Programming Discussions">
            <i className="fab fa-lg fa-discord circle" />
          </a>
        </section>
      </>
    </Flexbox>
  );
}
