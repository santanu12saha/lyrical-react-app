import { gql } from '@apollo/client';

const FETCH_SONG = gql`
    query getSong($id: ID!) {
        song(id: $id){
        id
        title
        }
    }
`;

export default FETCH_SONG;