import { Accessor, createEffect, createSignal, onCleanup } from 'solid-js';

// credits to https://github.com/TiagoCavalcante/solidjs-div-100vh

export function measureHeight() {
    return isClient() ? window.innerHeight : null;
}

function isClient() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

const create100vh = (): Accessor<number | null> => {
    const [height, setHeight] = createSignal<number | null>(measureHeight());

    createEffect(() => {
        if (!isClient()) return;

        const setMeasuredHeight = () => setHeight(measureHeight());

        window.addEventListener('resize', setMeasuredHeight);

        onCleanup(() => window.removeEventListener('resize', setMeasuredHeight));
    }, []);

    return height;
};

export default create100vh;
