import axios from 'axios';
const api = axios.create({
    baseURL: 'https://apndevschoolapi.herokuapp.com'
});



export default class Api {

    async listarMatriculas () {
        let r = await api.get('/matriculas');
        return r.data;
    }

    async inserirMatriculas (nome, chamada, curso, turma) {
        let r = await api.post('/matriculas', {nome, chamada, curso, turma})
        return r.data;
    }

    async alterarMatricula(idMatricula, nome, chamada, curso, turma ) {
        let r = await api.put(`/matriculas/${idMatricula}`, {nome, chamada, curso, turma})
        return r.data;
    }

    async deletarMatricula(idMatricula) {
        let r = await api.delete(`/matriculas/${idMatricula}`)
        return r.data;
    }
}
