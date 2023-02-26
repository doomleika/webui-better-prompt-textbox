<script lang="ts">
  import { createEventDispatcher, tick } from "svelte";

  const dispatch = createEventDispatcher();

  export let value: string;
  export let index: number;
  let editingMode: boolean = false;
  let editingText: string;
  let textInput: HTMLInputElement;
  $: textboxSize = Math.max(editingText?.length, 1);

  const click = async (e: MouseEvent) => {
    editingMode = true;
    editingText = `${value}`;
    await tick();
    textInput.select();
  };
  const finishEditing = async () => {
    dispatch("tagUpdated", { index, text: editingText });
    editingMode = false;
  };

  const cancelEditing = async () => {
    editingMode = false;
  };
  const keyDownHandler = async (e: KeyboardEvent) => {
    switch (e.code) {
      case `Escape`:
        cancelEditing();
        break;
      case `Tab`:
      case `Enter`:
        finishEditing();
        break;
    }
  };
</script>

<div
  class="flex border border-gray-500 font-medium text-xl font-mono px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
>
  <div class="max-w-auto" on:click={click} on:keypress={null}>
    {#if editingMode}
      <input
        bind:this={textInput}
        bind:value={editingText}
        on:keydown={keyDownHandler}
        on:focusout={cancelEditing}
        size={textboxSize}
      />
    {:else}
      <span>{value}</span>
    {/if}
  </div>
</div>
