<script lang="ts">
  import WebUITag from "./WebUITag.svelte";

  $: tags = ["aaaa", "bbbb", "cccc"];
  $: input = ``;

  const commitTagHandler = (e: KeyboardEvent) => {
    if (e.code !== "Enter") {
      return;
    }
    let inputArray = input.split(",");
    inputArray = inputArray.map((v) => v.trim());
    inputArray = inputArray.filter((v) => v !== "");
    tags = [...tags, ...inputArray];
    input = "";
  };
  const removeLastItem = () => {
    tags = tags.slice(0, -1);
  };
  const keyDownHandler = (e: KeyboardEvent) => {
    switch (e.code) {
      case "Enter":
      case "Tab":
        e.preventDefault();
        commitTagHandler(e);
        break;
      case "Backspace":
        if (input === "" && e.getModifierState("Control")) {
          removeLastItem();
        }
        break;
    }
  };
  const tagUpdated = (e: CustomEvent) => {
    const { index, text } = e.detail;
    tags[index] = text;
    if (text === "") {
      tags = tags.filter((v) => v !== "");
    }
    tags = tags;
  };
</script>

<div
  class="flex flex-wrap border border-gray-500 font-medium text-xl font-mono space-x-1 "
>
  {#each tags as tag, index (index)}
    {@const isMid = index === tags.length - 1}
    <WebUITag value={tag} {index} on:tagUpdated={tagUpdated} />
    {#if !isMid}
      <span>, </span>
    {/if}
  {/each}
  <span class="pr-1" />
  <input
    class="focus:outline-none flex-grow w-1 bg-gray-800"
    type="text"

    bind:value={input}
    on:keydown={keyDownHandler}
  />
</div>
