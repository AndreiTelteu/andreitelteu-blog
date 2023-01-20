import { A } from '@solidjs/router';
import { For } from 'solid-js';
import { Style } from 'solid-start';
import CriticalHeader from './Header.css?inline';

export default function Header() {
    const categories = [
        { slug: 'opensource', name: 'OpenSource' },
        { slug: 'projects', name: 'Projects' },
        { slug: 'blog', name: 'Blog' },
    ];
    return (
        <>
            <Style>{CriticalHeader}</Style>
            <div class="header-placeholder"></div>
            <header>
                <div class="header-container container">
                    <div class="header-logo">
                        <A href="/">Andrei Telteu</A>
                    </div>
                    <div class="header-menu">
                        <For each={categories}>
                            {(cat) => (
                                <A href={`/${cat.slug}`} class="header-menu-link">
                                    {cat.name}
                                </A>
                            )}
                        </For>
                    </div>
                </div>
            </header>
        </>
    );
}
