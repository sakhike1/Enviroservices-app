import { createClient } from "altogic";

const ENV_URL = "https://enviroservices.c5-na.altogic.com"; // replace with your envUrl
const CLIENT_KEY = "01040b55cb9a4a89a6c54a7c679d2ad0"; // replace with your clientKey

const altogic = createClient(ENV_URL, CLIENT_KEY, {
  signInRedirect: "/login",
});

export default altogic;
