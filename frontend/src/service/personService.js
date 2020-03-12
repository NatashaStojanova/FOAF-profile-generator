import axios from '../custom-axios/axios'
import qs from 'qs'

const PersonService = {
    fetchPersons: () => {
        return axios.get("/persons");
    },


    addPerson: (person) => {
        return axios.post("/persons/new_person", person);
    },

    addFriends: (friends) => {
        return axios.post("/persons/new_friends", friends)
    },

    addSocNet: (socNet) => {
        return axios.post("/persons/new_soc_net", socNet)
    },

    addWorkProf: (workProf) => {
        return axios.post("/persons/new_work_profile", workProf)
    }
};

export default PersonService;