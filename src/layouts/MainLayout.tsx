import { Outlet, Style } from 'solid-start';
import Header from '~/components/Header/Header';
import mainCritical from './MainLayout.css?inline';

export default function MainLayout() {
    return (
        <>
            <Style>{mainCritical}</Style>
            <div class="main-layout">
                <Header />
                <main>
                    mainlayout
                    <Outlet />
                </main>
            </div>
        </>
    );
}
