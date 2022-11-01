import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span> Svelte{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
          alt="svelte logo"
          width="16px"
          height="18px"
        />
      </h1>
      <ul>
        <li>
          run npm install qwik-svelte --save-dev in your qwik project to get
          started
        </li>

        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>
      <h2>
        Recommended Vite Config{" "}
        <small>
          (
          <a
            target="_blank"
            href="https://github.com/raymondmuller/qwik-svelte"
          >
            example here
          </a>
          )
        </small>
      </h2>
      <p>Add the vite plugin for svelte</p>
      <code>npm install @sveltejs/vite-plugin-svelte --save-dev</code>

      <p>Add the vite plugin for qwik-svelte (dedupes and optimizes svelte)</p>
      <code>import {"{ qwikSvelte }"} from 'qwik-svelte'</code>
      <p>
        <strong>
          Setting hydratable to true in the compiler options is required
        </strong>
      </p>
      <code>{"svelte({ compilerOptions: {  hydratable: true }"}</code>
      <br />
      <br />
      <br />
      <a class="mindblow" href="/counter">
        Blow my mind 🤯
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
