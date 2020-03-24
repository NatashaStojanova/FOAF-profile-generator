import axios from '../custom-axios/axios'

const PersonService = {
    fetchPersons: () => {
        return axios.get("/persons");
    },


    addPerson: (person) => {
        return axios.post("/persons/new_person", person);
    },

    generateProfile: (person) => {
        return axios.post("/persons/generate", person);
    },

    addFriends: (friends) => {
        return axios.post("/persons/new_friends", friends)
    },

    addSocNet: (socNet) => {
        return axios.post("/persons/new_soc_net", socNet)
    },

    addWorkProf: (workProf) => {
        return axios.post("/persons/new_work_profile", workProf)
    },

    addProfile: (profile) => {
        return axios.post("/persons/profile", profile)
    },

    parseProfile: (profile) => {
        return axios.post("/persons/parse", profile)
    }
};

export default PersonService;