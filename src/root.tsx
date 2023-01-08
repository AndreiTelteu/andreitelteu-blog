// @refresh reload
import { Body, Head, Html, Meta, Scripts, Title } from 'solid-start';
import './root.css';
import Router from './router';

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - With MDX</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Body>
                <Router />
                <Scripts />
            </Body>
        </Html>
    );
}
