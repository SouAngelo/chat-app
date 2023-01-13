import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                   <link rel="shortcut icon" type="image/png" href="http://batepapo.brazink.com.br/img/brazink-256.png" />
                   <title>Bate Papo | Online</title>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}