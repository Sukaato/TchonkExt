<script setup lang="ts">
defineProps<{ title: string; description: string; modelValue: boolean }>();
defineEmits<{ 'update:modelValue': [value: boolean] }>();
</script>

<template>
  <label class="flex cursor-pointer items-start gap-3 rounded-[10px] border border-card-border bg-card p-3">
    <input
      type="checkbox"
      role="switch"
      class="peer sr-only"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span
      class="relative mt-0.5 h-5 w-9 flex-none rounded-full bg-border transition-colors after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-accent peer-checked:after:translate-x-4 peer-focus-visible:outline-2 peer-focus-visible:outline-accent"
      aria-hidden="true"
    />
    <span class="min-w-0 flex-1">
      <span class="block font-semibold">{{ title }}</span>
      <span class="block text-[13px] text-muted">{{ description }}</span>
      <slot />
    </span>
  </label>
</template>
