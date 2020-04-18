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
    "revision": "3fb4caebd769015bef7de8b9d9f02a17"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "3b2660bf175f108645eff1a9f86f830c"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "f2e6b8de5a7dcd83c96c198560d5988c"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d9ee92428a4dd394a12d5dc5c29b797"
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
    "url": "collections/blog/index.html",
    "revision": "6965253e956a9c7d0ac92d47704a7a63"
  },
  {
    "url": "collections/book-reviews/index.html",
    "revision": "f096e7947b054644e48cbc3a784a4c69"
  },
  {
    "url": "collections/covid-19-diaries/index.html",
    "revision": "c09493d55e165ac41337e65688a077a6"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d92a1e41787973495309b3d3f8a7b510"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b2aae108f4be7f1e4d7783800f00f793"
  },
  {
    "url": "favicon.ico",
    "revision": "a4672a2ba4ce7aed5dceddbe6d9babd5"
  },
  {
    "url": "index.html",
    "revision": "d4b433ed0a3e3a740bcc436ce48cec31"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "164feaacfbe196ef4963c68d37edc418"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "e42ceab21e557d96c27c22a892682a2d"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "b0a8e5fce2c0eab89cbab4aa4707ad8b"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "d7e326dbc5f131d3d544325354cbb03e"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "9ce350a3c64b9c6b4d9a5c1848dd6e04"
  },
  {
    "url": "posts/what-i-am-doing-to-overcome-my-plantar-fasciitis/index.html",
    "revision": "a96e12ea586bdf932d55878c027810d9"
  },
  {
    "url": "reviews/that-all-shall-be-saved/index.html",
    "revision": "4cfaa0eb72429ad6b54222afcee23da4"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "0a4cc77a476fa14a7101b5677dddbadc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
