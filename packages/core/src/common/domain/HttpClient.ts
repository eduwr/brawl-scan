import { Axios, AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";

interface DefaultParams {
  url: string;
  config?: AxiosRequestConfig;
}

interface PostParams<D = any> extends DefaultParams {
  data: D;
}

export class HttpClient {
  constructor(private axios: AxiosInstance) {}

  get<R = any>({ url, config }: DefaultParams): Promise<AxiosResponse<R>> {
    return this.axios.get(url, config);
  }

  post<R = any, D = any>({
    url,
    data,
    config,
  }: PostParams<D>): Promise<AxiosResponse<R>> {
    return this.axios.post(url, data, config);
  }
}
