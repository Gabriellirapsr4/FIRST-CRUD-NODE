import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234@',
    database: 'bdcopa'
})

conexao.connect()
/**
 * Executa um codigo sql sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores valores a serem passados
 * @param {string} mensagemReject mensagem de erro a ser retornada 
 * @returns objeto a ser retornado
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado))    
            return resolve(row)          
        })
    })
}

export default conexao