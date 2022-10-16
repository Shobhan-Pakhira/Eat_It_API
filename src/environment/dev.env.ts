import { IEnv } from "../types/types"

const development_environment_variables: IEnv =  {
    stage: process.env.ENVIRONMENT || 'development',
    port: 8080,
    domain:'',
    apiPath: '/api',
    staticPath: '/public',
    /*db: {
        // add localhost mongodb details //
        name: '',
        user:'shobhanpakhira',
        pw: 'Tuf@devil',
        account: '',
        uri: (user: string, pw :string, name :string, account: string): string => {
            // return 'mongodb://localhost:27017'
            return `mongodb+srv://shobhanpakhira:<Tuf@devil>@ts-api.5sluvep.mongodb.net/?retryWrites=true&w=majority`;
        }*/
    db: "mongodb://0.0.0.0:27017/"
}

export = { ...development_environment_variables }