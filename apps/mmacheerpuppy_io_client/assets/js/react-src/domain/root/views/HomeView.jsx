/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import ThingsRotation from '../../common/components/ThingsRotation/ThingsRotation';
import '../common/css/styles.css';
import './homeViewStyles.css';

import getHostDetails from '../../../api/hosts';
import Flexbox from '../../common/containers/Flexbox';

const things = [
  'data-engineering',
  'cage-fighting',
  'rengar',
  'ETL',
  'the jvm',
  'golang',
  'event-sourcing',
  'flink',
  'spark',
  'kafka',
  '.nix',
  'aws',
  'contributing to OSS',
  'steak-dinners',
  'react',
  'containers',
  'networking & infrastructure',
  'elixir',
  'kubernates',
  'teaching programming over discord',
  'javascript-ninjas',
  'lofi hip hop radio - beats to relax/study to ',
  "CSS in JS (don't @ me)"
];

// add home icon and more tabs
export default function HomeView(props) {
  const { style } = props;
  // Intialise localhost.ip to location ip and update on a successful fetch request.
  const [thingsILike, setThingsILike] = useState(things);
  const [hostDetails, setHostDetails] = useState({
    ip: String(window.location.hostname)
      .replace(`${window.location.protocol}`, '')
      .replace('www.', ''),
    region: 'Canada'
  });
  const updateHostDetails = data => {
    // eslint-disable-next-line no-console
    console.log(`mmacheerpuppy.io resolved ${data.ip} in ${data.region}!`);
    setHostDetails({ ip: data.ip, region: data.region });
  };
  useEffect(() => {
    getHostDetails(updateHostDetails);
  }, []);
  useEffect(() => {
    setThingsILike(things.concat([hostDetails.region]));
  }, [hostDetails]);
  return (
    <Flexbox
      style={{ ...style, height: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}
    >
      <h1 className="title">
        hi my name is
        <p /> mmacheerpuppy@
        <span>{hostDetails.ip}</span>
      </h1>
      <h2 className="subtitle">
        <span className="faded"> i like&nbsp;</span>
        <ThingsRotation things={thingsILike} />
      </h2>
    </Flexbox>
  );
}
