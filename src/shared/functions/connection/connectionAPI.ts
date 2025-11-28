import axios from 'axios';
import { MethodsEnum } from '../../enums/method.enum';
import { ERROR_ACESS_DANIED, ERROR_CONNECTION } from '../../constants/errosStatus';

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: object) {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.get<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.get<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.get<T>(url)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: object) {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}

export const connectionAPITGet = async (url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.GET);
};

export const connectionAPIDelete = async (url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.DELETE);
};

export const connectionAPIPost = async (url: string, body: object) => {
  return ConnectionAPI.connect(url, MethodsEnum.POST, body);
};

export const connectionAPITPatch = async (url: string, body: object) => {
  return ConnectionAPI.connect(url, MethodsEnum.PATCH, body);
};

export const connectionAPITPut = async (url: string, body: object) => {
  return ConnectionAPI.connect(url, MethodsEnum.PUT, body);
};
