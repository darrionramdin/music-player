import { LOAD_LIST } from './actionTypes';

export function loadList(list) {
    return {
        type: LOAD_LIST,
        payload: list
    }
};