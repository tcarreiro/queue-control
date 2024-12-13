import { ServiceType, type ServiceUser } from "src/models/serviceUser.model";

export const getUsersQueueMock = ():Promise<Array<ServiceUser>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name:'User 1',
          dob:'',
          cpf:56164371265,
          ticketNumber:'CO0001',
          ticketCreatedAt:'',
          service: ServiceType.CONSULTATION
        },
        {
          name:'User 2',
          dob:'',
          cpf:51472313512,
          ticketNumber:'VA0001',
          ticketCreatedAt:'',
          service: ServiceType.VACCINATION
        },
        {
          name:'User 3',
          dob:'',
          cpf:13124315212,
          ticketNumber:'VA0002',
          ticketCreatedAt:'',
          service: ServiceType.VACCINATION
        },
        {
          name:'User 4',
          dob:'',
          cpf:56164371265,
          ticketNumber:'CO0002',
          ticketCreatedAt:'',
          service: ServiceType.CONSULTATION
        },
        {
          name:'User 5',
          dob:'',
          cpf:56164371265,
          ticketNumber:'CO0003',
          ticketCreatedAt:'',
          service: ServiceType.CONSULTATION
        },
        {
          name:'User 6',
          dob:'',
          cpf:13124315212,
          ticketNumber:'VA0003',
          ticketCreatedAt:'',
          service: ServiceType.VACCINATION
        },
      ]);
    }, 1000);
  });
}
