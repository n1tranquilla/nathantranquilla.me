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
    "revision": "1b60df693889d0c09fc5e0c2d7c7897f"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "2675a537d625b50e6f0f123ae77c7e36"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "656f5335ed247fb2324c061ac8479003"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "70bb1f2d6cd014f246ce40344e17492e"
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
    "revision": "f0baba7bad238ae6f55c68c4a41cb935"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "b3262e44a92c0074fc4e2fb333c4dd25"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "179b8b0b4de3037d01ad84a2456efb24"
  },
  {
    "url": "favicon.ico",
    "revision": "68c762288117548528d22a2bac646b9f"
  },
  {
    "url": "index.html",
    "revision": "8186e8bae55e1585dc7b81b5b41a4d56"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "699cc0a719344f3d84a082c7f166306a"
  },
  {
    "url": "posts/index.html",
    "revision": "e2dc765284681c2d04adee1323bc98ef"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "9467235b5f53812ed022b0e042d2b5e3"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "d32319401c09c214d582c9600de1fabd"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "4142daf7c1d9e20f21628b56979db16a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
