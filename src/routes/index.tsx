import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { LuCast, LuGithub } from "@qwikest/icons/lucide";
import BackgroundImg from "../background.png?jsx"

export default component$(() => {
  const imgStyle = useSignal({opacity: "0", animation: ""})
  const imgLoad = $(() => {
    imgStyle.value = {
      animation: "fadeIn 1s",
      opacity: ""
    }
  })

  return (
    <>
      <BackgroundImg id="bg" onLoad$={imgLoad} style={imgStyle.value} />
      <div class="center" style={imgStyle.value}>
      <h1><LuCast style={{ width: "100", height: "100" }} /><br />Unstream</h1>
      <p>A self taught fullstack developer.</p>
      <p><a href="https://github.com/wont-stream" aria-label="GitHub"><LuGithub /></a></p>
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
