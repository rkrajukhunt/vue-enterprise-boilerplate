import { serviceMaker, methods, ENDPOINT } from "./index";

export const auth = payload =>
  serviceMaker("/login", methods.POST, payload, ENDPOINT.AUTH_MICROSERVICE)