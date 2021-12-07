import IGender from "./IGender";

interface UserData {
  userName: string;
  userLastName: string;
  profilePicture: HTMLImageElement;
  birthDate: Date;
  age: number;
  gender: IGender,
  city: string,
  profession: string,
  hobbies: string,
  about: string,
}

export default UserData