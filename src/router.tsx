// @refresh reload
import { lazy, Suspense } from 'solid-js';
import { ErrorBoundary, Route, Routes } from 'solid-start';
import MainLayout from '~/layouts/MainLayout';

const Index = lazy(() => import('./pages/index.mdx'));
const Home = lazy(() => import('./pages/Home'));
const Docs = lazy(() => import('./pages/docs.mdx'));

export default function Router() {
    return (
        <ErrorBoundary>
            <Suspense>
                <Routes>
                    <Route path="/" component={MainLayout}>
                        <Route path="/" component={Index} />
                        <Route path="/home" component={Home} />
                        <Route path="/docs" component={Docs} />
                    </Route>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
}
