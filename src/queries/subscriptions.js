import axios from 'axios';

const baseULR = "https://subee-core-svc-production.up.railway.app/private/v1";

export const subscriptionsQueries = {
	fetchSubscrption: async (userID) => {
        try {
            const res = await axios.get(`${baseULR}/subscriptions/${userID}`);            
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
	},
    getMonthlySubscriptionsRecap: async (userID) => {
        try {
            const res = await axios.get(`${baseULR}/subscriptions/${userID}/recap`);
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    },
    getGlobalSubscriptionsRecap: async (userID) => {
        try {
            const res = await axios.get(`${baseULR}/subscriptions/${userID}/global_recap`);
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    }
};