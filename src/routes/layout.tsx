import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.raymondmuller.com/" target="_blank">
          Made with ♡ by raymondmuller
        </a>
      </footer>
    </>
  );
});
