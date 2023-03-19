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
                            <A href="/">
                                <h1 class="font-logo text-4xl text-center">
                                    STRTWR
                                </h1>
                            </A>
                        </nav>
                        <div class="grid place-items-center">
                            <div class="md:my-3 mb-8 relative w-[90vw] md:h-3">
                                <A href="https://discord.gg/mAFaUnT">
                                    <div class="sm:absolute sm:left-32 lg:left-72 sm:block grid place-items-center">
                                        <div class="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-brand-discord"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                                <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                                <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3" />
                                                <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                                            </svg>
                                            <p class="ml-1">
                                                Join our Discord Server
                                            </p>
                                        </div>
                                    </div>
                                </A>
                                <A href="/store-finder/select">
                                    <div class="sm:absolute sm:right-32 lg:right-72 sm:block grid place-items-center">
                                        <div class="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-search"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                <path d="M21 21l-6 -6" />
                                            </svg>
                                            <p class="ml-1">Store-Finder</p>
                                        </div>
                                    </div>
                                </A>
                            </div>
                        </div>
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
