export enum ServiceType {
  CONSULTATION = "CONSULTATION",
  VACCINATION = "VACCINATION"
}

export type ServiceUser = {
  name: string;
  dob: string;
  ticketNumber:string;
  cpf: number;
  ticketCreatedAt: string;
  service: ServiceType;
}
