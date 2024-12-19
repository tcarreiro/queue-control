import { defineStore, acceptHMRUpdate } from 'pinia';
import { type Routes } from 'src/models/page.model';
import { type Ticket } from 'src/models/serviceUser.model';
import { scrollToTop } from 'src/utils/utils';

export type AppState = {
  token:string;
  page: Routes|null;
  pageParams:string|null;
  componentKey:number;
  locale:string;
  selectedTicket: Ticket|null;
}

export const useApp = defineStore('appState', {
  state: ():AppState => ({
    token:"",
    componentKey:-1,
    locale:"br",
    page:null,
    pageParams:null,
    selectedTicket:null,
  }),
  getters: {
  },
  actions: {
    setupApp(newState:AppState) {
      this.$state = newState ?? null;
    },
    changePage(newPage: Routes, params?:string) {
      this.$state.page = newPage;
      this.$state.pageParams = params ?? null;
      scrollToTop();
    },
    setToken(token:string) {
      if (token) this.$state.token = token;
    },
    clearSelectedTicket() {
      this.$state.selectedTicket = null;
    },
    setSelectedTicket(newTicket:Ticket) {
      this.$state.selectedTicket = newTicket;
    },
    getSelectedTicket():Ticket|null {
      return this.$state.selectedTicket;
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot));
}
