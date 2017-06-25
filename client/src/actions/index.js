import axios from 'axios';

export const SAVE_AUTH = "save_auth";
export const FETCH_ME = "fetch_me";
export const FETCH_TOP_TRACKS = "fetch_top_tracks";

const ROOT_URL = 'https://api.spotify.com/v1';

export function saveAuth(access_token, refresh_token) {
    return {
        type: SAVE_AUTH,
        payload: {
            access_token,
            refresh_token
        }
    };
}

export function fetchMe(access_token) {
    const options = {
        'method': 'get',
        'url': `${ROOT_URL}/me`,
        'headers': {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': "application/json"
        }
    };

    const request = axios(options);

    return {
        type: FETCH_ME,
        payload: request
    };
}

export function fetchTopTracks(access_token) {
    const options = {
        'method': 'get',
        'url': `${ROOT_URL}/me/top/tracks`,
        'headers': {
            'Authorization': 'Bearer ' + access_token
        }
    };

    const request = axios(options);

    return {
        type: FETCH_TOP_TRACKS,
        payload: request
    };
}