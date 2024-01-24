export type ResponseObject<A extends Object> = {
  status: string;
  data: A;
};
