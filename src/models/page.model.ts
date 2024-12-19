import TicketGeneratorPage from 'pages/TicketGeneratorPage.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';
import TicketQueueManagementPage from 'pages/TicketQueueManagementPage.vue';
import TicketInfoPage from 'pages/TicketInfoPage.vue';
import TicketUserFormPage from 'src/pages/TicketUserFormPage.vue';
import AdminServicePage from 'src/pages/AdminServicePage.vue';
import MainPage from 'src/pages/MainPage.vue';

export enum Routes {
  MAIN_PAGE = "main-page",
  TICKET_SERVICE_REQUEST = "ticket-service-request",
  TICKET_SERVICE_REQUEST_USER_FORM = "ticket-service-request-user-form",
  TICKET_QUEUE_MANAGEMENT = "ticket-queue-management",
  TICKET_DETAILS = "ticket-details",
  SERVICES_CONFIG = "services-config",
  NOT_FOUND = "not-found",
}

export type Page = {
  name: Routes;
  module: object
}

export const PageRoutes: Array<Page> = [
  {
    name:Routes.MAIN_PAGE,
    module: MainPage
  },{
    name:Routes.TICKET_SERVICE_REQUEST,
    module: TicketGeneratorPage
  },{
    name:Routes.TICKET_SERVICE_REQUEST_USER_FORM,
    module: TicketUserFormPage
  },{
    name:Routes.TICKET_QUEUE_MANAGEMENT,
    module: TicketQueueManagementPage
  },{
    name:Routes.TICKET_DETAILS,
    module: TicketInfoPage
  },{
    name:Routes.SERVICES_CONFIG,
    module: AdminServicePage
  },{
    name:Routes.NOT_FOUND,
    module: ErrorNotFound
  },
];
