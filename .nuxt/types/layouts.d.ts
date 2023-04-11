import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/ismx9/projects/coverletterbuilder/node_modules/.pnpm/nuxt@3.3.3_sass@1.61.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}