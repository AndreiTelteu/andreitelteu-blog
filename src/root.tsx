// @refresh reload
import { Body, Head, Html, Meta, Scripts, Style, Title } from 'solid-start';
import inline from './critical.css?inline';
import Router from './router';
import create100vh from '~/utils/create100vh';

export default function Root() {
    const height = create100vh();
    return (
        <Html lang="en">
            <Head>
                <Title>Andrei Telteu</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
                <Style>{inline}</Style>
            </Head>
            <Body style={{ '--full-height': height() ? height() + 'px' : '100vh' }}>
                <Router />
                <Scripts />
            </Body>
        </Html>
    );
}
