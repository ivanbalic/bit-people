class User {
    constructor(firstName, lastName, email, birthDate, pictures, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = new Date(birthDate);
        this.pictures = pictures;
        this.gender = gender;
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getHiddenEmail = () => {

        const splitedEmail = this.email.split("");
        splitedEmail.splice(3, (splitedEmail.indexOf("@") - 3), "...");

        const hiddenEmail = splitedEmail.join("");

        return hiddenEmail;
    }

    getFullName = () => {
        return `${this.capitalize(this.firstName)} ${this.capitalize(this.lastName)}`;
    }
}

export default User;