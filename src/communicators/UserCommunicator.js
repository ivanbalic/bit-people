import { User } from "../entities/User";
import { USERS_ENDPOINT } from "../shared/endpoints";
import { httpService } from "../services/HttpService";

class UserCommunicator {
  fetchUsers() {
    localStorage.setItem("relodeDate", new Date());
    return httpService.get(USERS_ENDPOINT).then(response => {
      const listOfUsers = response.results;
      return listOfUsers.map(({ name, email, dob, picture, gender }) => {
        const { first, last } = name;
        const { date } = dob;
        return new User(first, last, email, date, picture, gender);
      });
    });
  }

  getUsers() {
    const prevUsers = JSON.parse(localStorage.getItem("users"));
    if (prevUsers) {
      const listOfUsers = prevUsers.map(
        ({ firstName, lastName, email, birthDate, pictures, gender }) =>
          new User(firstName, lastName, email, birthDate, pictures, gender)
      );
      return new Promise(resolve => {
        resolve(listOfUsers);
      });
    }
    return this.fetchUsers();
  }

  getNewUsers() {
    return this.fetchUsers();
  }
}

export const userCommunicator = new UserCommunicator();
