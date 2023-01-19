import { A } from '@solidjs/router';
import { Style } from 'solid-start';
import CriticalHeader from './Header.css?inline';

export default function Header() {
    return (
        <>
            <Style>{CriticalHeader}</Style>
            <div class="header-placeholder"></div>
            <header>
                <div class="header-container container">
                    <div class="header-logo">
                        <A href="/">Andrei Telteu</A>
                    </div>
                </div>
            </header>
        </>
    );
}
