/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "9dc43de83511d669b0a81773e0213762"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "5aac30c6f83d829e816957bfcb2bbbdb"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "d05e3d87a96d0b0e5bb95f7953e2a2d2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "1455b1c7ae327e8ed5df5c5365387d26"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "71b9eaca076dd175967ada710fdf6c08"
  },
  {
    "url": "assets/js/critical.bundle.js",
    "revision": "2095d8c8a1894d46e9539a4cd40db457"
  },
  {
    "url": "assets/js/deferable.bundle.js",
    "revision": "92dd07f97f4da6c3dcaf222db4677bb2"
  },
  {
    "url": "assets/stylesheets/index.css",
    "revision": "69ab94fc227083121383c155bf3252a4"
  },
  {
    "url": "collections/covid-19-diaries/index.html",
    "revision": "eea63d25cc1e69e6ec463dae4b4cef52"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "9490e4f9572eece8726abd872c0da440"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "db771d3fbba2436fb6706ca3299fbe4d"
  },
  {
    "url": "favicon.ico",
    "revision": "e2bfc41e4683bb576062e5dcf567e341"
  },
  {
    "url": "index.html",
    "revision": "21adf361808751295a9404c02e364fe4"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "149e32e3ad3e871cd978f5d28b0ed05d"
  },
  {
    "url": "posts/index.html",
    "revision": "ad546b478513d75923f0d2a11a6c312d"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "c8d4541229914826c770263578a46d88"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "01fa512078f841004175252b4a77e709"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "67a2085fe19b446bfe4ea66720a17819"
  },
  {
    "url": "posts/what-i-am-doing-to-overcome-my-plantar-fasciitis/index.html",
    "revision": "f76a67026b53ac8e80cdf1ab29fd0fbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
