let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "static/js/bundle.js",
        "/index.html",
        "/",
        "/home",
        "manifest.json",
        "logo192.png",
        "favicon.ico",
        "static/media/jsw_vaani_logo.3c217bd9cae025441b997863dbbbb935.svg",
        "static/media/location_on.be8e0651677065d25982178c88988cc2.svg",
        "static/media/a.cdf8dddf8dcc80983533a5b9968767a0.svg",
        "static/media/accessibility_new.4f2efdea3fa54edc195ed9793b090344.svg",
        "static/media/login.4caf62fd0a46b71de38cd10ae2ba8209.svg",
        "static/media/message.b22173f1b138517487fdccad0189e586.svg",
        "static/media/vaani.d773bfb78a4f6a73834a3a874e55c847.svg",
        "static/media/lining.53f065de80a0265d330d8064b431c0a3.svg",
        "static/media/woman.4e007f9cdc00dfa473912b55282c375d.svg",
        "static/media/enterpreneurship.eebb841891c861cefc31f06e8ad42b1a.svg",
        "static/media/capacity_building.943c05e06de6b7d50172dd81b95b0588.svg",
        "static/media/business_tools.fc23363039ee468235211ed14b70845d.svg",
        "static/media/mentorship.60d0867c28ca0e961b4d0536c1c2e11d.svg",
        "static/media/market_access.802de650fa83abc82848d09eea46c88e.svg",
        "static/media/financial_linkage.20af49546347c33d30bbc13901991f68.svg",
        "static/media/arrow.6e03556f058b18bbec5803668f9427e3.svg",
        "static/media/collaborators.b83e5ea350cefbc812f96143be3e7186.svg",
        "static/media/small_lining.8f9a5427ce71ee221619051961e26698.svg",
        "static/media/samhita.d8d9def729845f3ce7c4f886fbb186b4.svg",
        "static/media/frontier.434a17cf49fc25f7195ce8029ddd4043.svg",
        "static/media/tri.42f0a5633616d04dc72bd6073e317d57.svg",
        "static/media/arrow_small.cd1e0e08aa90d40d5819e393cdd79bbc.svg",
        "static/media/youtube.409b1f73cfc2965be4f1865daa689f68.svg",
        "static/media/linkedin.0995e0b66047a5fac5ad3032abf4fefc.svg",
        "static/media/instagram.f73f61214d5c9c6f8186cfd777c83211.svg",
        "static/media/facebook.3602debf203936a4750c6b3e25942e8a.svg",
        "static/media/x.3dd0821d4997c1947b2c4dd9d5469a35.svg",
        "static/media/card1.f9a0151fb7b7880d2af549666bb22b79.svg",
        "static/media/card2.5c36b36aec755a6f65baa72e3aa8aa28.svg",
        "static/media/card3.0cf2d25ea9cb88aecc50babc001993a3.svg",
        "static/media/card4.2e98dcdc2fb6e8c538c7fa9df34bec96.svg",
        "static/media/card5.908cd2d86812b924fa626a60a458f9d7.svg",
        "static/media/upcoming1.9d55ffb6f43124c60349eca7c29ec229.svg",
        "/static/media/upcoming2.d56a0d426facd3e2f912fbae4e644b2d.svg",
        "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        "https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&display=swap",
        "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&family=Anek+Devanagari:wght@100..800&display=swap",
        "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&family=Anek+Devanagari:wght@100..800&family=Anek+Tamil:wght@100..800&display=swap",
        "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&family=Anek+Devanagari:wght@100..800&family=Anek+Tamil:wght@100..800&family=Anek+Telugu:wght@100..800&display=swap",
        "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&family=Anek+Devanagari:wght@100..800&family=Anek+Kannada:wght@100..800&family=Anek+Tamil:wght@100..800&family=Anek+Telugu:wght@100..800&display=swap",
        "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&family=Anek+Devanagari:wght@100..800&family=Anek+Gujarati:wght@100..800&family=Anek+Kannada:wght@100..800&family=Anek+Tamil:wght@100..800&family=Anek+Telugu:wght@100..800&display=swap",
        "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
        "https://fonts.googleapis.com/css2?family=Anek+Latin:wght@100..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
        "https://fonts.gstatic.com/s/aneklatin/v5/co3WmWZulTRoU4a8dqrWiajBS5ByUkvdrluH-z-KzhM.woff2",
        "https://fonts.gstatic.com/s/notosans/v36/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5a7duw.woff2",
        "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3_-gs51os.woff2",
        "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4s51os.woff2",
        "https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E30-8s51os.woff2",
        "https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7E_DMs5.woff2",
        "https://fonts.gstatic.com/s/anekdevanagari/v8/jVyd7nP0CGrUsxB-QiRgw0NlLaVt_QUAkYxLRoCL23mlrWAxpZsQ.woff2",
        "https://fonts.gstatic.com/s/anekbangla/v5/_gPr1R38qTExHg-17BhM6n66QhabMYB0fBKONtHLWwrlyis.woff2",
        "https://fonts.gstatic.com/s/anektamil/v9/XLY2IZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW2-DU897Eg.woff2",
        "https://fonts.gstatic.com/s/anektelugu/v8/LhW2MVrUNvsddMtYGCx4FcVWOjlwE1WgXdoJ-5XtInVyehY.woff2",
        "https://fonts.gstatic.com/s/anekkannada/v5/raxvHiCNvNMKe1CKFsINYFlgkEIwGa8nL6ruWJg1pfmJA3Nd.woff2",
        "https://fonts.gstatic.com/s/anekgujarati/v9/l7gKbj5oysqknvkCo2T_8FuiIRBA7lncQUmbIBEtPIKPSfm5Xw.woff2",
        "https://fonts.gstatic.com/s/anekdevanagari/v8/jVyd7nP0CGrUsxB-QiRgw0NlLaVt_QUAkYxLRoCL23mlrWExpQ.woff2",
        "https://fonts.gstatic.com/s/anektelugu/v8/LhW2MVrUNvsddMtYGCx4FcVWOjlwE1WgXdoJ-5XtPnVy.woff2",
        "https://fonts.gstatic.com/s/anekbangla/v5/_gPr1R38qTExHg-17BhM6n66QhabMYB0fBKONtHLSQrl.woff2",
        "https://fonts.gstatic.com/s/anekgujarati/v9/l7gKbj5oysqknvkCo2T_8FuiIRBA7lncQUmbIBEtPIKUSfk.woff2",
        "https://fonts.gstatic.com/s/anektamil/v9/XLY2IZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW2-VU88.woff2",
        "https://fonts.gstatic.com/s/anekkannada/v5/raxvHiCNvNMKe1CKFsINYFlgkEIwGa8nL6ruWJg1peOJAw.woff2"
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
      })
    );
  }
});
