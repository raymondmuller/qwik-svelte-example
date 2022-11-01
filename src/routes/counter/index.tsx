import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { qwikify$ } from "qwik-svelte";

import Button from "./svelte/Button.svelte";
import NumberDisplay from "./svelte/NumberDisplay.svelte";

export const SvelteButton = qwikify$(Button);
export const SvelteNumberDisplay = qwikify$(NumberDisplay);

export default component$(() => {
  const store = useStore({ count: 0 });

  return (
    <>
      <div>
        <SvelteNumberDisplay count={store.count} client:visible />
        <br />
        <div style="display:flex; gap: 12px;">
          <SvelteButton client:hover host:onClick$={() => store.count++} />
          <SvelteButton client:hover host:onClick$={() => store.count--}>
            -
          </SvelteButton>
        </div>
      </div>
      <br />
      <a href="/">back</a>
    </>
  );
});
