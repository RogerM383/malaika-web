import {gql} from "@apollo/client";

export const SEND_MAIL = gql`
    mutation SEND_EMAIL($to: String!, $subject: String!, $body: String!) {
        sendEmail(
            input: {
                to: $to
                subject: $subject
                body: $body
                clientMutationId: ""
            }) {
            origin
            sent
            message
        }
    }
`;