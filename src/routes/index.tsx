import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { LuCast, LuGithub } from "@qwikest/icons/lucide";
import CatImg from "../IMG_1102.webp?jsx"

export default component$(() => {

  const content = [
    (<><h1><LuCast style={{ width: "100", height: "100" }} /><br />Unstream</h1>
      <p>A self taught fullstack developer.</p>
      <p><a href="https://github.com/wont-stream" aria-label="GitHub"><LuGithub /></a></p></>), (<><h1>Me:</h1><CatImg /></>)
  ]
  const cat = useSignal(false)

  const catFunc = $(() => {
    if (cat.value) {
      cat.value = false
    } else {
      cat.value = true
    }
  })
  return (
    <>
      <div class="center">
        {content[cat.value == false ? 0 : 1]}
        <p><button onClick$={catFunc}>Click me</button></p>
      </div>
    </>
  );
});


export const head: DocumentHead = {
  title: "Unstream",
  meta: [
    {
      name: "description",
      content: "A self taught fullstack developer.",
    },
  ],
};
