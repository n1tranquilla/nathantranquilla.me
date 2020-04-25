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
    "revision": "63f0495ac0cf3260d1435ac19c684d5c"
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
    "url": "assets/img/mindblown.gif",
    "revision": "34a0a23b7fc5d16814adaa32518435ab"
  },
  {
    "url": "assets/js/appbar.bundle.js",
    "revision": "e19337d6a41ee211f28abaf2cf3d2461"
  },
  {
    "url": "assets/js/critical.bundle.js",
    "revision": "e7ab0fb547e4155a50b7cf5f3378e895"
  },
  {
    "url": "assets/js/deferable.bundle.js",
    "revision": "8673ae6eb7f793422bb3be4b194e4665"
  },
  {
    "url": "assets/stylesheets/flex.css",
    "revision": "9fb02151178b654da5656c37545f7c66"
  },
  {
    "url": "assets/stylesheets/index.css",
    "revision": "2c0734d279193328eb4e3b53194ebbd6"
  },
  {
    "url": "collections/blog/index.html",
    "revision": "6c5ce9f28a11a8e2d3d4a3b0cba2443a"
  },
  {
    "url": "collections/book-reviews/index.html",
    "revision": "e6964adf72ea02fc6c9fc7992245e26d"
  },
  {
    "url": "collections/covid-19-diaries/index.html",
    "revision": "96a070cdd8da3b84c1366f772297c76a"
  },
  {
    "url": "collections/opinion/index.html",
    "revision": "9f2cd18c81bf47e6fa49565a3f922af3"
  },
  {
    "url": "collections/philosophy/index.html",
    "revision": "90853591c8a0724218a892cbc34f57f4"
  },
  {
    "url": "collections/religion/index.html",
    "revision": "7a0b1b687943400df529201de3334546"
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
    "revision": "1ca14ec8a12b9c44599ad6dc9b0382bf"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "164feaacfbe196ef4963c68d37edc418"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "34c9fcca6a7648d33d5bedbd13e5059f"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "bd790cd39976dede094606fcdd953f46"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "5833193bed068d3067d80777ec8d0106"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "bc5d2dad0a24788ff84023e61673d58b"
  },
  {
    "url": "posts/the-covid-19-diaries-the-mentality-in-the-united-states/index.html",
    "revision": "8ef371823fc851575c67d5c4aadbac4c"
  },
  {
    "url": "posts/what-i-am-doing-to-overcome-my-plantar-fasciitis/index.html",
    "revision": "40030f367389d978760dffd9dd339082"
  },
  {
    "url": "reviews/that-all-shall-be-saved/index.html",
    "revision": "b707af94793933b511d179ffa5d513c6"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "0a4cc77a476fa14a7101b5677dddbadc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
