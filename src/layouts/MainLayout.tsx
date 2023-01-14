import { Outlet } from 'solid-start';
import Header from '~/components/Header/Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <main>
                mainlayout
                <Outlet />
            </main>
        </>
    );
}
