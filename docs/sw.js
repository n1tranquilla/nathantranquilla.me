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
    "revision": "9bf226db715f8cdf7c22cf163ad5b809"
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
    "revision": "5041fc93a11329aaae47e875d103c3a1"
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
    "revision": "ee30f6bc3977755d5525ca0cbb88e8a9"
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
    "revision": "49e3544d83362812971b6a81b76653eb"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "cb114b31cef386aa1b600b84c80e3a8e"
  },
  {
    "url": "posts/index.html",
    "revision": "eebdbb7abe767601c58d907a6717bea8"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "97ae325d88cc7b13cf27d4e4733339e4"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "4c2f0cde2ac1c8e1a60bf004eb479d3d"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "77986c8e0b674a12d62dbd62b51283e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
