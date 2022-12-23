// @refresh reload
import { Suspense } from 'solid-js';
import {
    useLocation,
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from 'solid-start';
import './root.css';

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>STRTWR</Title>
                <Meta charset="utf-8" />
                <Meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <nav class="h-28 grid place-items-center sticky top-0 z-50 bg-[#FFFFFF]">
                            <h1 class="font-logo text-4xl">STRTWR</h1>
                        </nav>
                        <div class="relative">
                            <Routes>
                                <FileRoutes />
                            </Routes>
                        </div>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}
