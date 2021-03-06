// k6 run --vus 20 --duration 1m script.js

import http from 'k6/http';
import { check } from 'k6';
//import { Counter } from 'k6/metrics';
// A simple counter for http requests
//export const requests = new Counter('http_reqs');
// you can specify stages of your test (ramp up/down patterns) through the options object
// target is the number of VUs you are aiming for
//export const options = {
//  stages: [
//    { target: 20, duration: '1m' },
//    { target: 15, duration: '20s' },
//    { target: 0, duration: '20s' },
  //],
//  thresholds: {
//    requests: ['count < 100'],
//  },
//};
export default function () {
  // our HTTP request, note that we are saving the response to res, which can be accessed later
  let res = http.get('http://localhost:8080/fruits/');
  check(res, { 'status was 200': (r) => r.status == 200 });
}