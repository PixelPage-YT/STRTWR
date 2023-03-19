import { A } from 'solid-start';
import type { Component } from 'solid-js';

/**
 * Small Card used for displaying information
 *
 * @component
 * @example
 * <SmallCard imageUrl="example.com" heading="Example" text="Example" url="example.com" />
 * @returns JSX element
 */
const SmallCard: Component<{
    /** Heading for the card */
    heading: string;
    /** Text for the card */
    text: string;
    /** Redirect of the card */
    link: string;
}> = ({ heading, text, link }) => {
    return (
        <div class="md:w-96 w-80 h-24 rounded-2xl shadow-xl mb-10 relative">
            <div class="p-3">
                <h1 class="text-2xl font-heading mt-2">{heading}</h1>
                <p class="text-sm">{text}</p>
                {/* Button */}
                <A href={link}>
                    <div class="absolute right-3 top-4">
                        <div class="rounded-lg h-10 relative w-28 shadow mt-3">
                            <div class="h-10 w-28 absolute overflow-hidden rounded-lg border-2 border-[#FFFFFF]">
                                <div class="h-10 absolute w-10 left-1 top-1.5 bg-[#a1def9] blur-xl" />
                                <div class="h-10 absolute w-10 left-8 top-1.5 bg-[#f7d8d5] blur-xl" />
                                <div class="h-10 absolute w-10 left-16 top-1.5 bg-[#f7d8d5] blur-xl" />
                            </div>
                            <div class="grid place-items-center absolute h-10 w-28">
                                <p class="font-medium font-heading">Öffnen</p>
                            </div>
                        </div>
                    </div>
                </A>
            </div>
        </div>
    );
};

export default SmallCard;
