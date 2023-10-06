/* eslint-disable */

/// <reference types="vite/client" />

// Mocks all files ending in `.vue` showing them as plain Vue instances
import { type StorageDependant } from 'src/logic/storage';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import Vue from 'vue';

declare module 'vue' {
  // 3. Declare augmentation for Vue
  interface ComponentCustomProperties extends StorageDependant {}
}
