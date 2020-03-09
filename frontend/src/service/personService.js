import axios from '../custom-axios/axios'
import qs from 'qs'

const PersonService = {
    fetchPersons: () => {
        return axios.get("/persons");
    },


    addPerson: (person) => {
        const data = {
            ...person,
            firstName: person.firstName

        };
        //let form = new FormData();
        const formParams = qs.stringify(data);
        return axios.post("/persons", formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },


}

export default PersonService;