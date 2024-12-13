import { type Page, PageRoutes, Routes } from "src/models/page.model"
import NotFoundPage from 'pages/ErrorNotFound.vue';
import { useApp } from "src/stores/appState";

const appState = useApp();

export const getRoute = (name:string): Page => {
  return PageRoutes.find((page) => page.name === name) ?? {
    name: Routes.NOT_FOUND,
    module: NotFoundPage
  }
}

export const routePage = (newPage:Routes, pageParams?:string) => {
  appState.changePage(newPage, pageParams);
}
