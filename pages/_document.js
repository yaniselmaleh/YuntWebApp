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
          </main>
        </body>
      </html>
    );
  }
}
