// class APIHandler {
//   constructor(baseUrl) {
//     this.BASE_URL = baseUrl;
//   }

//   getFullList() {}

//   getOneRegister() {}

//   createOneRegister() {}

//   updateOneRegister() {}

//   deleteOneRegister() {}
// }

class APIHandler {
  //
  constructor(baseUrl) {
    // this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: baseUrl });
  }
  getFullList() {
    return this.api.get(`/characters`);
  }
  getOneRegister(characterId) {
    return this.api.get(`/characters/${characterId}`);
  }
  updateOneRegister(characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }
  deleteOneRegister(characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
  createOneRegister(characterInfo) {
    return this.api.post(`/characters`, characterInfo);
  }
}
