import api from '../plugins/axios'

class CamisaService {
  async getAllCamisas() {
    const response = await api.get('/camisas/')
    return response.data
  }
  async saveCamisas(camisa) {
    let response
    if (camisa.id) {
      response = await api.put(`/camisas/${camisa.id}/`, camisa)
    } else {
      response = await api.post('/camisas/', camisa)
    }
    return response.data
  }
}

export default new CamisaService()