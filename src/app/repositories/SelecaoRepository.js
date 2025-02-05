import { consulta } from '../database/conexao.js'

class SelecaoRepository {
    //CRUD
    create(selecao) {
        const sql = 'INSERT INTO selecoes SET ?;'
        return consulta(sql, selecao, 'Erro ao cadastrar seleção')
    }    
    
    findAll() {
        const sql = 'SELECT * FROM selecoes;'
        return consulta(sql, 'Erro ao mostrar seleçoes')
    }

    findById(id) {
        const sql = 'SELECT * FROM selecoes WHERE id = ?;'
        return consulta(sql, id, 'Erro ao Procurar seleção')
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE id=?;'
        return consulta(sql, [selecao, id], 'Erro ao atualizar seleção')

    }

    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE id=?;'
        return consulta(sql, id, 'Erro ao deletar seleção')
    }

}

export default new SelecaoRepository;
