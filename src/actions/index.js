import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder'

//in this case with redux we can't use async await syntax without a MIDDLEWARE LIKE THUNK because action creator need to return js plain object but async will return a request object so we need to use a MIDDLEWARE like thunk with redux 

//fetch unique id
export const fetchUsersAndPosts = () => async  (dispatch, getState) =>{
    await dispatch(fetchPosts());

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id =>dispatch(fetchUsers(id)))
    .value()
}

// fetch posts from jsonPlaceholder
export const fetchPosts =  () => async  dispatch => {
        const response = await jsonPlaceholder.get('./posts')
        dispatch ({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }

//Action creator func for fetch users from jsonPlaceholder
export const fetchUsers =  (id) => async  dispatch => 
    _fetchUsers(id, dispatch);
    
//memoizing out action creator function to avoid dons and repeating of data rendering
const _fetchUsers = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch ({
        type: 'FETCH_USERS',
        payload: response.data
    })
})