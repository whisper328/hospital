import axios from "axios";

export function LOGIN_API(username, password) {
  let url = "/api/houde/user/save";
  let data = {
    userId: username,
    password: password,
    registerId: "admin"
  };
  return axios({
    method: "post",
    url: url,
    data: data
  })
    .then(res => {
      console.log(res);
      console.log("----axios res---");
      // return Promise.resolve(res)
      return Promise.resolve(res);
    })
    .catch(err => {
      console.log(err);
      console.log("----axios err------");
      return Promise.reject(err);
    });
}

export function P_DICT_API(pDictName, dictNote) {
  console.log("this is P_DICT_APIA----------");

  let url = "/api/houde/p_dict/save";
  let data = {
    pDictName: pDictName,
    dictNote: dictNote
  };
  return axios({
    method: "post",
    url: url,
    data: data
  })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
// http://192.168.1.105:8080/houde/s_dict/save

export function S_DICT_API(data) {
  let url = "/api/houde/s_dict/save";
  console.log("this is S_DICT_API----------");
  return axios({
    method: "post",
    url: url,
    data: data
  })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

// http://192.168.1.105:8080/houde/p_dict/findAll
export function FINDALL() {
  console.log("this is FINDALL----------");
  let url = "/api/houde/p_dict/findAll";
  return axios({
    method: "post",
    url: url
  })
    .then(res => {
      console.log("this is get success----------");
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
// http://192.168.1.101:8080/houde/s_dict/findAll
export function S_FINDALL() {
    console.log("this is S_FINDALL----------");
    let url = "/api/houde/s_dict/findAll";
    return axios({
      method: "post",
      url: url
    })
      .then(res => {
        console.log("this is  success----------");
        return Promise.resolve(res);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
// houde/use/delete
export function USE_DEL(data){
  let url ='/api/houde/user/delete'
  return axios({
    method:'post',
    url:url,
    data:data
  }).then(res => {
    console.log("this is  success----------");
    return Promise.resolve(res);
  })
  .catch(err => {
    return Promise.reject(err);
  });
}