<script lang="ts">
  import WebUITag from "./WebUITag.svelte";
  let newTag = ""; // Initialize a variable to hold the current tag being entered
  $: tags = ["aaaa", "bbbb", "cccc"]; // Initialize an empty array to hold the tags

  function addTag() {
    // Add the current tag to the array of tags, and reset the newTag variable
    tags = [...tags, newTag];
    newTag = "";
  }
  $: input = "";
  const commitTagHandler = (e: KeyboardEvent) => {
    console.log(e);
  };
  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "Tab") {
      e.preventDefault();
      commitTagHandler(e);
    }
  };
  const tagUpdated = (e: CustomEvent) => {
    const {index, text} = e.detail;
    tags[index] = text;
    tags = tags;
  }
</script>

<div class="flex border border-gray-500 font-medium text-xl font-mono">
  {#if tags.length > 0}
    {#each tags as tag, index (tag)}
    <!-- Optimization trick: leave element empty than squeeze array -->
      {#if tag !== ''}
        <WebUITag value={tag} index={index} on:tagUpdated={tagUpdated}/>
      {/if}
    {/each}
  {/if}
  <div>{input}</div>
  <input
    class="focus:outline-none"
    type="text"
    bind:value={input}
    on:keydown={keyDownHandler}
  />
</div>
