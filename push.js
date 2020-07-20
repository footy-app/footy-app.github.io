var webPush = require('web-push');
const vapidKeys = {
   "publicKey": "BDCwC_iJU-L4wP91uQVeEOTYERAp-fAlzh2nu5co1BsgOFmsWStmnDPiHRGbumeJOhHcl_45yWI0TsyXqYVxUuA",
   "privateKey": "CxFTlEROOGAJ5u_tFmkHnk_6pvyicgts0hnlHqsjMi8"
};



var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/e9cH_mMSN58:APA91bGdBADHPXfotmyCMjszccnTjPyFBNsgXNZA1JuIKrGR1sZ3gzcQBAF4VChDwHCq_aDuEzJ575n1JvDuZQWbbJOikTbtMzvFAo2QGtNBZ9yXXY6B7OIH_xKdsWAPoqQJuisV8Ag_",
   "keys": {
      "p256dh": "BMrsQBvhc+z8pZ+PSpQsFYQHOw5H3JVLMLdEEg3ei1pCVZfyQTMoJM6kcpoiu5t/5h0ilBVI4oE0+O0/IlWpoSQ=",
      "auth": "vsj5+gSHvO1lzCQIePkSbg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
   gcmAPIKey: '274441504207',
   TTL: 60
};



   webPush.setVapidDetails(
      'mailto:example@yourdomain.org',
      vapidKeys.publicKey,
      vapidKeys.privateKey
   )
   webPush.sendNotification(
      pushSubscription,
      payload,
      options
   );
