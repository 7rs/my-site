<script lang="ts">
  import { writable } from 'svelte/store';
  import clsx from 'clsx';
  import Icon from '@iconify/svelte';

  const menuOpened = writable(true);
</script>

<article
  style:left={$menuOpened ? '50%' : 'auto'}
  style:right={$menuOpened ? 'auto' : '0%'}
  style:translate={$menuOpened ? '-50% 0%' : '0% 0%'}
  style:margin-right={$menuOpened ? '0' : 'calc((100% - var(--content-width)) / 2)'}
  style:width={$menuOpened ? '100%' : '40%'}
  class={clsx('z-9999 fixed top-4', 'rounded-xl px-4 py-3 flex gap-3 justify-end')}
>
  {#if $menuOpened}
    <p class="flex-grow-1">Pages</p>
    <div class="flex justify-between gap-inherit">
      <Icon icon="line-md:search" />
      <Icon icon="line-md:light-dark-loop" />
      <Icon icon="line-md:close-to-menu-transition" />
    </div>
  {/if}
  <button
    on:click={() => {
      $menuOpened = !$menuOpened;
    }}
  >
    <Icon icon={$menuOpened ? 'line-md:chevron-right' : 'line-md:chevron-left'} />
  </button>
</article>

<style lang="stylus">
  article
    --content-width 100dvw
    @media screen and (min-width 768px)
      --content-width var(--max-content-width)

    max-width var(--max-content-width)
    background-color white
    color black

    transition width 1s ease-out

    :global(svg)
      height 1.5rem
      width auto
      color black
</style>
