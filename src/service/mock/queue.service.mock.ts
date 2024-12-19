import { ServiceType, TicketStatus, type Ticket } from "src/models/serviceUser.model";

export const getUsersQueueMock = ():Promise<Array<Ticket>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          user:{
            name:'User 1',
            dob:'',
            cpf:56164371265,
          },
          ticketNumber:'CO0001',
          ticketCreatedAt:'',
          serviceType: ServiceType.CONSULTATION,
          ticketStatus: TicketStatus.ON_QUEUE
        },
        {
          user:{
            name:'User 2',
            dob:'',
            cpf:56164371265,
          },
          ticketNumber:'VA0001',
          ticketCreatedAt:'',
          serviceType: ServiceType.VACCINATION,
          ticketStatus: TicketStatus.ON_QUEUE
        },
        {
          user:{
            name:'User 3',
            dob:'',
            cpf:56164371265,
          },
          ticketNumber:'VA0002',
          ticketCreatedAt:'',
          serviceType: ServiceType.VACCINATION,
          ticketStatus: TicketStatus.ON_QUEUE
        },
        {
          user:{
            name:'User 4',
            dob:'',
            cpf:56164371265,
          },
          ticketNumber:'CO0002',
          ticketCreatedAt:'',
          serviceType: ServiceType.CONSULTATION,
          ticketStatus: TicketStatus.ON_QUEUE
        },
        {
          user:{
            name:'User 5',
            dob:'',
            cpf:56164371265,
          },
          ticketNumber:'CO0003',
          ticketCreatedAt:'',
          serviceType: ServiceType.CONSULTATION,
          ticketStatus: TicketStatus.ON_QUEUE
        },
        {
          user:{
            name:'User 6',
            dob:'',
            cpf:56164371265,
          },
          ticketNumber:'VA0003',
          ticketCreatedAt:'',
          serviceType: ServiceType.VACCINATION,
          ticketStatus: TicketStatus.ON_QUEUE
        },
      ]);
    }, 1000);
  });
}
