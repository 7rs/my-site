<script lang="ts">
  import clsx from "clsx";
  import { onMount } from "svelte";

  import type { Heading } from "@scripts/components/common.ts";

  interface Props {
    title?: string;
    headings?: Heading[];
    frameRate?: number;
  }

  let { title = "No title", headings = [], frameRate = 60 }: Props = $props();

  let position = $state(0);
  let positions: number[] = $state([]);
  let activeIndex = $state(0)

  onMount(() => {
    positions = headings.map((heading) => {
      const element = window.document.getElementById(heading.slug);
      if (element == null) {
        return 0;
      }

      return element.offsetTop;
    });

    function setPosition(_event: Event) {
      if (window.scrollY === position) {
        return;
      }

      position = window.scrollY;
      console.debug(`new position: ${position}`);

      for (let i = 0; i < positions.length; i++) {
        if (position > positions[i]) {
          continue;
        }

        console.debug(`active: ${i}`);
        activeIndex = i
        break
      }
    }

    addEventListener("scrollend", setPosition);
  });
</script>

<div class="flex flex-col w-full gap-2 max-h-[400px] overflow-y-auto">
  {#each headings as heading, i}
    {#if heading.depth >= 2}
      <a
        class={clsx([
          "break-words text-wrap no-underline hover:underline hover:text-link transition-all",
          heading.depth <= 2 && "font-bold",
          heading.depth >= 3 && `ml-${(heading.depth - 2) * 3}`,
          activeIndex === i ? "text-active" : "text-main"
        ])}
        href={`#${heading.slug}`}
      >
        {heading.text}
      </a>
    {/if}
  {/each}
</div>
