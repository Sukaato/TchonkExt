<script setup lang="ts">
import { Radio, Settings, Trash2 } from '@lucide/vue';
import { browser } from 'wxt/browser';

defineProps<{ showClear: boolean }>();
defineEmits<{ clear: [] }>();
</script>

<template>
  <header class="flex items-center justify-between border-b border-border px-3 py-2.5">
    <div class="flex items-center gap-2 font-semibold">
      <span class="grid size-[22px] place-items-center rounded-md bg-accent text-accent-fg">
        <Radio :size="13" :stroke-width="2.5" />
      </span>
      <span>TchonkExt</span>
    </div>
    <div class="flex items-center gap-1">
      <button v-if="showClear" type="button" class="btn-ghost" @click="$emit('clear')">
        <Trash2 :size="14" />
        Vider
      </button>
      <button
        type="button"
        class="btn-ghost hover:text-fg"
        title="Choisir les fonctionnalités"
        @click="browser.runtime.openOptionsPage()"
      >
        <Settings :size="14" />
      </button>
    </div>
  </header>
</template>
