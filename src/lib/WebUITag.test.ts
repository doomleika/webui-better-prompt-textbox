import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import WebUITag from './WebUITag.svelte';

describe(`test`, async () => {
  it.skip(`svelte`, async() => {
    const host = document.createElement('div');

    // Append the new container in the HTML body
    document.body.appendChild(host);

    // Create an instance of the vertical tab
    const instance = new WebUITag({ target: host });

    render(WebUITag);
    const heading = screen.getByText('Hello World!')

    // Check if the instance has value
    expect(instance).toBeTruthy()

    // Test if we can find the "First Tab Heading"
    expect(host.innerHTML).toContain("First Tab Heading")

  })
});
