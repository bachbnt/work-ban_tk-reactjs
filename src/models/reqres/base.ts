export interface BaseRequest {}

export interface BaseResponse {
  status: number;
  data?: any;
  message?: string;
}
