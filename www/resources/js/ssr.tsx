import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { route } from '../../vendor/tightenco/ziggy';
import { RouteParams, Router, Config, ValidRouteName } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup: ({ App, props }) => {
            const ziggy = page.props.ziggy as Config;

            global.route = (<T extends ValidRouteName>(
                name: T,
                params?: RouteParams<T>,
                absolute?: boolean,
                config?: Config
            ): string | Router => {
                if (!name) {
                    throw new Error("Route name must be a non-empty string.");
                }
                return route(name, params, absolute, config ?? ziggy);
            }) as typeof route;

            return <App {...props} />;
        },
    })
);
