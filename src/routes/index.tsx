import { $, component$, useSignal, useOnWindow } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { LuCast, LuGithub } from "@qwikest/icons/lucide";

export default component$(() => {
  const pageSize = useSignal({width: 0, height:0})
  const imgStyle = useSignal({opacity: "0", animation: ""})
  const imgLoad = $(() => {
    imgStyle.value = {
      animation: "fadeIn 1s",
      opacity: ""
    }
  })

  useOnWindow("load", $(() => {
    pageSize.value.width = window.innerWidth
  pageSize.value.height = window.innerHeight
}))

  return (
    <>
      <img src={`https://img.wont.stream/bg.avif?w=${pageSize.value.width}&h=${pageSize.value.height}`} decoding="async" loading="lazy" id="bg" onLoad$={imgLoad} onError$={imgLoad} style={imgStyle.value} width={pageSize.value.width} height={pageSize.value.height}></img>
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
