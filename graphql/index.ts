import {gql} from "graphql-request";

export const getUserQuery = `
    query User($email: String!) {
        user(by: {email: $email}) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl
        }
    }
`

export const createUserMutation = `
    mutation UserCreate($input: UserCreateInput!) {
        userCreate(input: $input) {
            user {
                id
                name
                email
                avatarUrl
                description
                githubUrl
                linkedInUrl
            }
        }
    }
`