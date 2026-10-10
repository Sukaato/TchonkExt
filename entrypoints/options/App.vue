<script setup lang="ts">
import FeatureToggle from '@/components/options/FeatureToggle.vue';
import { useSettings } from '@/composables/useSettings';
import { GROUPS } from '@/lib/features';

const { settings, ready, update } = useSettings();
</script>

<template>
  <main class="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-8">
    <header>
      <h1 class="m-0 text-xl font-bold">TchonkExt</h1>
      <p class="m-0 text-muted">Active seulement les fonctionnalités que tu veux.</p>
    </header>

    <template v-if="ready">
      <section v-for="group in GROUPS" :key="group.title" class="flex flex-col gap-2">
        <h2 class="m-0 text-xs font-semibold uppercase tracking-wide text-muted">
          {{ group.title }}
        </h2>

        <FeatureToggle
          v-for="f in group.features"
          :key="f.key"
          :title="f.title"
          :description="f.description"
          :model-value="settings[f.key]"
          @update:model-value="update({ [f.key]: $event })"
        >
          <span
            v-if="f.key === 'searchMap'"
            class="mt-2 flex items-center gap-2 text-[13px]"
          >
            Afficher pour
            <select
              class="rounded-md border border-border bg-bg px-1.5 py-1 text-fg disabled:opacity-50"
              :disabled="!settings.searchMap"
              :value="settings.searchMapMode"
              @change="
                update({
                  searchMapMode: ($event.target as HTMLSelectElement).value as 'local' | 'all',
                })
              "
            >
              <option value="local">les recherches de lieux</option>
              <option value="all">toutes les recherches</option>
            </select>
          </span>
        </FeatureToggle>
      </section>
    </template>
  </main>
</template>
