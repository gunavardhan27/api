export interface IUser {
  username: string;
  profilePicture: string;
  password: string;
}

export interface IUserInfo {
  username: string;
  profilePicture: string;
  token: string;
}

export enum relations {
  FAMILY = 'Parent or Guardian',
  EDUCATOR = 'Educator',
  PROFESSIONAL = 'Support Professional',
  INDIVIDUAL  = 'Individual Explorer',
  OTHER = 'Other'
}