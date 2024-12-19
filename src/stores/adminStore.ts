import { defineStore, acceptHMRUpdate } from 'pinia';
import { type Routes } from 'src/models/page.model';
import { scrollToTop } from 'src/utils/utils';

export type AdminState = {
  page: Routes|null;
}

export const useAdminApp = defineStore('adminState', {
  state: ():AdminState => ({
    page:null,
  }),
  getters: {
  },
  actions: {
    setupApp(newState:AdminState) {
      this.$state = newState ?? null;
    },
    changePage(newPage: Routes) {
      this.$state.page = newPage;
      scrollToTop();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAdminApp, import.meta.hot));
}
