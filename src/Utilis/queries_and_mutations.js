import { gql } from '@apollo/client';



export const SIGNUP_MUTATION = gql`
        mutation SignUpMutation(
                $userFirstName: String!
                $userSecondName: String!
                $userEmail: String!
                $userTel: String!
                $userLevel:String!
                $password: String!
                ){
                    registerUser(userFirstName:$userFirstName, userSecondName:$userSecondName, userEmail:$userEmail, userTel:$userTel,userLevel:$userLevel, password:$password ) {
                        userFirstName
                        userSecondName
                        userEmail
                        userTel
                        userLevel
                        lastSeen
                        dpImage
                        phoneVerified
                        emailVerified
                        authToken
                    }
                }

`;

export const LOGIN_MUTATION = gql`

mutation LoginMutation(
    $userEmailOrTel: String!
    $password: String!
    ){
        login(userEmailOrTel:$userEmailOrTel,password:$password) {
            userFirstName
            userSecondName
            userEmail
            userTel
            userLevel
            lastSeen
            dpImage
            phoneVerified
            emailVerified
            authToken
        }
    }

`;




export const UPDATE_LAST_SEEN_MUTATION = gql`
    mutation  {
        updateLastSeen
    }
`;


export const LOAD_ME_QUERY = gql`

query me{
       me{
        userFirstName
        userSecondName
        userEmail
        userTel
        userLevel
        lastSeen
        dpImage
        phoneVerified
        emailVerified
    }
  }

`;




export const HELLO_SERVER_QUERY = gql`
    query hello{
        hello
    }

`;