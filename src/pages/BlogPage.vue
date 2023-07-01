<template>
  <q-page class="items-center q-pa-lg column">
    <h3>{{ $t('navigation.blog') }}</h3>
    <div class="q-pa-md" style="width: 25vw; min-width: 300px">
      <q-list bordered separator>
        <q-item
          v-for="i in entries"
          v-bind:key="i.path"
          clickable
          v-ripple
          @click="router.replace(`/blog/${i.path}`)"
        >
          <q-item-section>
            <q-item-label>{{ i.meta!.title }}</q-item-label>
            <q-item-label caption>{{ i.meta!.description }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label>{{
              DefaultDateFormatter.format(i.meta!.createdAt)
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { unref } from 'vue';
import { DefaultDateFormatter } from 'src/logic/constants';

const router = useRouter();
const val = unref(router.currentRoute);
const entries = val.matched[1].children.slice(1);
</script>
