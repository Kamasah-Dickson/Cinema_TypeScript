interface Env {
	REACT_APP_API_URL: string;
	REACT_APP_API_KEY: string;
}

declare const env: Env;

export default env;

// Now you can access the environment variables in your React + TypeScript application and TypeScript will know the types of the variables.
// Copy code
// import env from './env'
// const apiUrl: string = env.REACT_APP_API_URL;
// const apiKey: string = env.REACT_APP_API_KEY;
