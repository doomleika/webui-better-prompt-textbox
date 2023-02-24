<script>
  import WebUITag from './WebUITag.svelte';
  let tags = ['234ij1', '131i23', 'jij341']; // Initialize an empty array to hold the tags
  let newTag = ''; // Initialize a variable to hold the current tag being entered

  function addTag() {
    // Add the current tag to the array of tags, and reset the newTag variable
    tags = [...tags, newTag];
    newTag = '';
  }
</script>

<div>
  <label for="tags">Tags:</label>
  <input type="text" id="tags" bind:value={newTag} placeholder="Add tags..." on:keydown={(event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTag();
    }
  }} />

  {#if tags.length > 0}
    <div>
      {#each tags as tag (tag)}
        <WebUITag value={tag}></WebUITag>
      {/each}
    </div>
  {/if}
</div>
