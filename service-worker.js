
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);


workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '1' },
  { url: '/nav.html', revision: '1' },
  { url: '/css/materialize.min.css', revision: '1' },
  { url: '/js/materialize.min.js', revision: '1' },
  { url: "/pages/leagues.html", revision: '1' },
  { url: "/pages/match.html", revision: '1' },
  { url: "/pages/myteam.html", revision: '1' },
  { url: "/league.html", revision: '1' },
  { url: "/team.html", revision: '1' },
  { url: "/js/nav.js", revision: '1' },
  { url: "/js/api.js", revision: '1' },
  { url: "/js/match.js", revision: '1' },
  { url: "/js/team.js", revision: '1' },
  { url: "/js/db.js", revision: '1' },
  "/css/materialize.css",
  "/css/index.css",
  "/css/index.css.map",
  "/fonts/Montserrat-Medium.ttf",
  "/js/materialize.js",
  "js/idb-2.1.3/lib/idb.js",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
  "/images/icons/icon-512x512-512x512.png",
  "/images/icons/icon-72x72.png",
  "/images/icons/icon-96x96.png",
  "/images/logos/logo-2000.png",
  "/images/logos/logo-2002.png",
  "/images/logos/logo-2003.png",
  "/images/logos/logo-2001.png",
  "/images/logos/logo-2013.png",
  "/images/logos/logo-2014.png",
  "/images/logos/logo-2015.png",
  "/images/logos/logo-2016.png",
  "/images/logos/logo-2017.png",
  "/images/logos/logo-2018.png",
  "/images/logos/logo-2019.png",
  "/images/logos/logo-2021.png",
  "/images/Menu 1.png",
  "/images/Menu 2.png",
  "/images/Menu.png",
  "/images/ronaldo.png",
  "/images/Add.svg",
  "/images/neymar-mini.jpg",
  "/images/neymar.jpg",
  "/images/barca.png",
  "/images/messips.png",
  "/manifest.json",
],
  {
    ignoreUrlParametersMatching: [/.*/]
  }
);

workbox.routing.registerRoute(new RegExp("/"),
  workbox.strategies
    .networkFirst({
      cacheName: "sepakfootball",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
        }),
      ],
    })
);

workbox.routing.registerRoute(
  /^https:\/\/api\.football\-data\.org\/v2\//,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "api-sepakbola",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 120,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  })
);



workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst()
);

// workbox.routing.registerRoute(
//   new RegExp("/"),
//   workbox.strategies.networkFirst({
//     cacheName: 'footy_app'
//   })
// );


self.addEventListener('push', function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: '/images/icons/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});