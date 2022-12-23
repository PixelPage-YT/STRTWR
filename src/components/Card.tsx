import { A } from 'solid-start';
import type { Component } from 'solid-js';

/**
 * Card used for displaying information
 *
 * @component
 * @example
 * <Card imageUrl="example.com" heading="Example" text="Example" url="example.com" />
 * @returns JSX element
 */
const Card: Component<{
    /** Link to an image that is displayed at the top */
    imageUrl: string;
    /** Heading for the card */
    heading: string;
    /** Text for the card */
    text: string;
    /** Redirect of the card */
    link: string;
}> = ({ imageUrl, heading, text, link }) => {
    return (
        <div class="w-72 h-96 rounded-2xl shadow-xl mb-10 relative overflow-hidden">
            <img
                src={imageUrl}
                class="rounded-t-2xl h-40 object-cover w-72"
            ></img>
            <div class="p-5 overflow-hidden">
                <h1 class="text-2xl font-heading">{heading}</h1>
                <p class="h-28 overflow-hidden break-words">{text}</p>
                <div class="h-8 w-72 bg-[#FFFFFF] absolute bottom-[2.6rem] blur-sm -translate-x-5" />
                {/* Button */}
                <A href={link} class="absolute bottom-5">
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
                </A>
            </div>
        </div>
    );
};

export default Card;
