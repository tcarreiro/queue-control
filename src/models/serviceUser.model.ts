// TODO: ServiceType has to come from backend so admin is able to register new services
export enum ServiceType {
  CONSULTATION = "CONSULTATION",
  VACCINATION = "VACCINATION"
}

export enum TicketStatus {
  ON_QUEUE = "CONSULTATION",
  BEING_CALLED = "VACCINATION",
  CALLED = "CALLED",
  CANCELED = "CANCELED",
  CONCLUDED = "CONCLUDED"
}

export type Ticket = {
  user?: Customer;
  ticketCreatedAt: string;
  ticketNumber:string;
  ticketStatus: TicketStatus;
  serviceType: ServiceType;
}

export class Customer {
  name: string = "";
  dob: string = "";
  cpf: number|string = "";
}

export class User {
  name: string = "";
  dob: string = "";
  email: string = "";
  cpf: number|string = "";
}
