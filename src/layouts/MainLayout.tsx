import { Outlet, Style } from 'solid-start';
import Header from '~/components/Header/Header';
import MainCritical from './MainLayout.css?inline';

export default function MainLayout() {
    return (
        <>
            <Style>{MainCritical}</Style>
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
