import axios from "axios";

export function isValidResponse(resp) {
  return resp && resp.status === 200 && resp.data.status === 1;
}

export const AUTH_MICROSERVICE = axios.create({
  baseURL:
    process.env.VUE_APP_API_LOCATION !== undefined
      ? process.env.AUTH_MICROSERVICE
      : "http://localhost:8080/api/v1"
});

export const CATALOG_MICROSERVICE = axios.create({
  baseURL:
    process.env.VUE_APP_API_LOCATION !== undefined
      ? process.env.CATALOG_MICROSERVICE
      : "http://localhost:8090/api/v1"
});

CATALOG_MICROSERVICE.interceptors.request.use(config => {
  const token = localStorage.getItem("auth.currentUser.token");

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export const ENDPOINT = {
  AUTH_MICROSERVICE,
  CATALOG_MICROSERVICE
};

export const methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

export class APIError {
  message;

  constructor(msg) {
    this.message = msg;
  }

  get getMessage() {
    return this.message;
  }
}

export const serviceMaker = async (url, type, data, service) => {
  try {
    let result;
    const APIInstance = service;

    switch (type) {
      case "GET": {
        result = await APIInstance.get(url);
        break;
      }
      case "POST": {
        result = await APIInstance.post(url, data);
        break;
      }
      case "PUT": {
        result = await APIInstance.put(url, data);
        break;
      }
      case "DELETE": {
        result = await APIInstance.delete(url);
        break;
      }
      default: {
        // eslint-disable-next-line no-throw-literal
        throw "InvalidMethod";
      }
    }
    if (!isValidResponse) {
      // eslint-disable-next-line no-throw-literal
      throw "InvalidResponse";
    }
    return result;
  } catch (err) {
    // tslint:disable-next-line:no-console
    throw new APIError(
      err.response ? err.response.data : "Something went wrong"
    );
  }
};
