import USERS_ENDPOINT from '../shared/data-source';

const fetchData = () => {

    return fetch(USERS_ENDPOINT)
        .then((response) => {

            response.json();
        })
        .then((response) => {

            const listOfUsers = response.results;
            const mappedUsers = listOfUsers.map((user) => {

                const { name, email, dob, picture, gender } = user;
                const { first, last } = name;
                const { date } = dob;

                return new User(first, last, email, date, picture, gender);
            })

            return mappedUsers;
        });
}

export { fetchData };