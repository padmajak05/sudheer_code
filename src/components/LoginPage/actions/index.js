
import HttpClient from '../httpClient';

const login = (data, callback) => {
  return (dispatch) => {
    dispatch()
    HttpClient.post({
      path: '/api/users/list',
      data,
    }).then((res) => {
      if (res && res.data && res.data && res.data.status) {
        dispatch((res.data));
        callback(res.data.data);
      } else if (res && !res.data.status) {
        dispatch((res.data));
      }
    }).catch((err) => {
      errorHandling(err, {
        callback: (error_data) => {
          dispatch(login_failure(error_data));
        },
      });
    });
  };
};

export default login;
