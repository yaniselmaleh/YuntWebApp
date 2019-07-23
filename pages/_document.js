import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="fr-Fr">
        <Head/>
        <title>Yunt</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"/>
        {/* <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Open+Sans:400,600,800|Playfair+Display:400,700&display=swap" rel="stylesheet">  */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,800|Playfair+Display:400,700" rel="stylesheet"/>
        {/* <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400i" rel="stylesheet"> */}
        <body data-lang="fr" data-countrycode="fr">
          <main>
            <Main />
            <NextScript />
      <div
         class="fb-customerchat"
         page_id="342493183076214"
         ref="live_chat"
         theme_color="optional hex color code"
         logged_in_greeting="optional greeting message for logged in users"
         logged_out_greeting="optional greeting message for logged out users">
     </div>
          </main>
      
      

     <script>
         var div = document.createElement('div');
         div.className = 'fb-customerchat';
         div.setAttribute('page_id', '342493183076214');
         div.setAttribute('ref', 'b64:bGl2ZV9jaGF0');
         document.body.appendChild(div);
         window.fbMessengerPlugins = window.fbMessengerPlugins || {
           init: function () {
             FB.init({
               appId            : '1678638095724206',
               autoLogAppEvents : true,
               xfbml            : true,
               version          : 'v3.0'
             });
           }, callable: []
         };
         window.fbAsyncInit = window.fbAsyncInit || function () {
           window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
           window.fbMessengerPlugins.init();
         };
         setTimeout(function () {
           (function (d, s, id) {
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) { return; }
             js = d.createElement(s);
             js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
         }, 0);
       </script>

        </body>
      </html>
    );
  }
}
