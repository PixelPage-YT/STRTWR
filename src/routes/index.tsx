import { For } from 'solid-js';
import Card from '~/components/Card';
import config from '../../config';

/**
 * Index Page
 * @returns JSX element
 */
const Index = () => {
    return (
        <>
            <div class="grid sm:px-32 lg:px-72 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center mt-5">
                <For each={config.shops}>
                    {(shop) => (
                        <Card
                            imageUrl={`/images/${shop.image}`}
                            heading={shop.name}
                            text={shop.description}
                            link={shop.url}
                        />
                    )}
                </For>
            </div>
            <p class="text-slate-100 mb-5 text-center">
                We are not affiliated with any brands displayed above.
            </p>
        </>
    );
};

export default Index;
