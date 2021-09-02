'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2aa3408ad75e0caf4fe4dcd7153cc3f1",
"assets/assets/fonts/cairo/Cairo-Black.ttf": "2594318e02816dbea2837af4c5a6b0e1",
"assets/assets/fonts/cairo/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/assets/fonts/cairo/Cairo-ExtraLight.ttf": "b06831a64c4b3b2cdcf5bc0048acbada",
"assets/assets/fonts/cairo/Cairo-Light.ttf": "521aad886875e8c23944c69616960523",
"assets/assets/fonts/cairo/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/cairo/Cairo-SemiBold.ttf": "df4b7a4fa0bbf338ddcf7abad1885344",
"assets/assets/icons/delete.png": "58c4387e40da6b3e5b252a9ba6329f73",
"assets/assets/icons/delivery_icon.png": "3ddd37a6b9637258db7331d23be23d02",
"assets/assets/icons/drawer_navigation/nav_all_orders.png": "f04ce23f362e408710abf49ebeed5957",
"assets/assets/icons/drawer_navigation/nav_assign_order.png": "1d80cd290de4bfb0cdbc4dd45aa5f7af",
"assets/assets/icons/drawer_navigation/nav_categories.png": "ac3139b982bb4a85fc6a614869aa28c2",
"assets/assets/icons/drawer_navigation/nav_cities.png": "0d8c1da689e76f4697ae34e3b105ae09",
"assets/assets/icons/drawer_navigation/nav_commissions.png": "b2e7fcbc602d0d0639de1b6c5966f8f3",
"assets/assets/icons/drawer_navigation/nav_home.png": "d38edec1129c9b227cbb922b7c10b386",
"assets/assets/icons/drawer_navigation/nav_notifications.png": "fac0aac65a5ec61ab1f04c96b05cbfb8",
"assets/assets/icons/drawer_navigation/nav_orders.png": "94f8b6e531e62da9528f84f3ba0ec0b0",
"assets/assets/icons/drawer_navigation/nav_orders_payments.png": "15aa0aaaa2dc19840d5ae4af0f070aa7",
"assets/assets/icons/drawer_navigation/nav_payments.png": "a53aee6485d407513c6173d6f0d1479f",
"assets/assets/icons/drawer_navigation/nav_settings.png": "2ae2018c76430dea863c9413a86dbf3d",
"assets/assets/icons/drawer_navigation/nav_staff.png": "d9cf832ad15dfd21611059ac3698d4d4",
"assets/assets/icons/drawer_navigation/nav_staff_list.png": "2a9e49825302ed5a6ca183d756bcf131",
"assets/assets/icons/drawer_navigation/nav_stores.png": "54b8e201b05af1a2e180df8bf2974331",
"assets/assets/icons/drawer_navigation/nav_users.png": "06fc931a90dd191b65c0e3601a49fd9d",
"assets/assets/icons/drawer_navigation/nav_vendors.png": "1416a79198cd79315a974a52c622bfc1",
"assets/assets/icons/drawer_navigation/nav_view_on_map.png": "787f35c515387abe5b0defea366b236c",
"assets/assets/icons/edit.png": "1e9eef6179d6a8d38ae63417e0a2bb56",
"assets/assets/icons/female.png": "18d5005586dfcb3c567c7ad85baee703",
"assets/assets/icons/male.png": "ca39dc4d64e6f7c1d2528918e72ea500",
"assets/assets/icons/map/ic_droppointact.png": "1fa2dfdfebdf67cd96e2029505814ad9",
"assets/assets/icons/map/ic_pickup_pointact.png": "bc214b21bd9b3ee42e9a12f9f001506d",
"assets/assets/icons/send.png": "2558144b1da40aba14c399c4bf3e2809",
"assets/assets/icons/units.png": "8716a161544b72d0381cfeea8db9a6fb",
"assets/assets/temp/category.png": "da1702ed06a6b852eba452ac3c230595",
"assets/assets/temp/profile_image.png": "14d3c3180a9cb9ce1ad26a354c399a9c",
"assets/FontManifest.json": "6b530ad102c52d593d426debbb252c9a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2e098738bea6ff8df61840c0a929bae2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f132a76841ba79565c57fedf37babec9",
"/": "f132a76841ba79565c57fedf37babec9",
"main.dart.js": "83ae515d010921b0b4c68e24ac51a20d",
"manifest.json": "e73aa29fa0421edcb1f519c22a94e3ae",
"version.json": "44ccb2db547af76ecee1f39cb863f8cc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
