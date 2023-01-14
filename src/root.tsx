// @refresh reload
import { Body, Head, Html, Meta, Scripts, Style, Title } from 'solid-start';
import './root.css';
import inline from './critical.css?inline';
import Router from './router';

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>AndreiTelteu</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
                <Style>{inline}</Style>
            </Head>
            <Body>
                <Router />
                <Scripts />
            </Body>
        </Html>
    );
}
