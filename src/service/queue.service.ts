import { type ServiceUser } from "src/models/serviceUser.model";
import { getUsersQueueMock } from "./mock/queue.service.mock";
import { isAllMocked } from "./services.config";

const enableLocalMock = false;

export const isMocked = ():boolean => {
  return isAllMocked() || enableLocalMock;
}

export const getUsersQueue = ():Promise<Array<ServiceUser>> => {
  return isMocked() ? getUsersQueueMock() : getUsersQueueMock();
}
