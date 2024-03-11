declare global {
  interface Window {
    daum: any;
  }
}

export interface addrType {
  address: string;
  zonecode: string;
}

export interface UserType {
  username: string;
  email: string;
  phone: string;
  role: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  gender: string;
  detailAddr: string;
}
