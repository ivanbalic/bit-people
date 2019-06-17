class User {
  constructor(firstName, lastName, email, birthDate, pictures, gender) {
    this.email = email;
    this.gender = gender;
    this.pictures = pictures;
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = new Date(birthDate);
  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  getHiddenEmail() {
    const array = this.email.split("@");
    array[0] = array[0].slice(0, 3) + "...";
    return array.join("@");
  }

  getFullName() {
    return `${this.capitalize(this.firstName)} ${this.capitalize(
      this.lastName
    )}`;
  }

  getFormatedBday() {
    return this.birthDate.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
}

export { User };
