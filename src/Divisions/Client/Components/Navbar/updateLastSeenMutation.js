import gql from "graphql-tag";


import { UPDATE_LAST_SEEN_MUTATION } from "../../../../Utilis/queries_and_mutations";
import { useAuthToken } from "../../../../authToken";
import { useMutation } from "@apollo/client";



export const useLastSeenMutation = () => {
  const [_, setAuthToken] = useAuthToken();

  const [mutation, mutationResults] = useMutation(UPDATE_LAST_SEEN_MUTATION, {
    //if the mutation succeed, we save the token for later
    onCompleted: (data) => {
      setAuthToken(data.login.jwt);
    },
  });

  //we have rewritten the function to have a cleaner interface
  const updateLastSeen = () => {
    return mutation();
  }
  return [updateLastSeen, mutationResults]
};