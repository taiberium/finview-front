import request from 'superagent';
import prefixPlugin from 'superagent-prefix';

const prefix = prefixPlugin('/api');

export const get = (url, params) =>
  request
    .get(url)
    .use(prefix)
    //.set(getAuthorizedHeader())
    .query(params)
    .retry(2)
      .then(response => response.body)
      .catch(error => error);

export const post = (url, data) =>
  request
    .post(url)
    .use(prefix)
    .send(data)
   // .set(getAuthorizedHeader())
    .retry(2);

export const put = (url, data, params) =>
  request
    .put(url)
    .use(prefix)
    .send(data)
    //.set(getAuthorizedHeader())
    .query(params)
    .retry(2);

export const del = (url, params) =>
  request
    .del(url)
    .use(prefix)
    .query(params)
   // .set(getAuthorizedHeader())
    .retry(2);

export const download = (url, params) =>
  request
    .get(url)
    .use(prefix)
    .query(params)
   // .set(getAuthorizedHeader())
    .responseType('blob')
    .retry(2);
