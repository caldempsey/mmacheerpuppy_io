/* eslint-disable no-console */
/* eslint-disable no-undef */

/* *
   Passes JSON with keys
  {
    "ip": 127.0.0.1,
    "region": Canada
  }
  
  To the respective callback.
   * */
export default function getHostDetails(callback) {
  fetch('http://ip-api.com/json')
    .then(res => {
      console.log(res.status);
      if (res.status >= 400 && res.status < 600) {
        throw new Error('Bad response');
      }
      if (!res.headers.get('content-type').includes('application/json')) {
        throw new TypeError('Response not JSON');
      }
      return res.json();
    })
    .then(data => {
      callback({ ip: data.query, region: data.regionName });
    })
    .catch(err => console.error(err));
}
