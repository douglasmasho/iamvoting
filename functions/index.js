const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

const env = functions.config();
const appID= env.algolia.app_id;
const apiKey = env.algolia.admin_api_key;


const client = algoliasearch(appID, apiKey);
//create an index
const index = client.initIndex("articles");

export const onProductCreated = functions.firestore.document()


