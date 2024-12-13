import TicketGeneratorPage from 'pages/TicketGeneratorPage.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';
import TicketQueueManagementPage from 'pages/TicketQueueManagementPage.vue';
import TicketInfoPage from 'pages/TicketInfoPage.vue';

export enum Routes {
  TICKET_SERVICE_REQUEST = "ticket-service-request",
  TICKET_QUEUE_MANAGEMENT = "ticket-queue-management",
  TICKET_DETAILS = "ticket-details",
  NOT_FOUND = "not-found",
}

export type Page = {
  name: Routes;
  module: object
}

export const PageRoutes: Array<Page> = [
  {
    name:Routes.TICKET_SERVICE_REQUEST,
    module: TicketGeneratorPage
  },{
    name:Routes.TICKET_QUEUE_MANAGEMENT,
    module: TicketQueueManagementPage
  },{
    name:Routes.TICKET_DETAILS,
    module: TicketInfoPage
  },{
    name:Routes.NOT_FOUND,
    module: ErrorNotFound
  },
];
