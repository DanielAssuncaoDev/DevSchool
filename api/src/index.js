import db from './db.js';
import express from 'express';
import cors from 'cors'
 

const app = express();
app.use(cors());
app.use(express.json());




// LISTAR ALUNOS MATRICULADOS

app.get('/matriculas', async (req, resp) => {
    try {
        let r = await db.tb_matricula.findAll({order: [['id_matricula', 'desc']]});
        resp.send(r);

    } catch (e) {
        resp.send({erro: e.toString()});
    }
})




// INSERIR MATRICULA    

app.post('/matriculas', async (req, resp) => {
    try {
        let m = req.body;

        let inserirMatrucula = {
            nm_aluno: m.nome,
            nr_chamada: m.chamada,
            nm_curso: m.curso,
            nm_turma: m.turma 
        };

        let alunoRepetido = await db.tb_matricula.findAll({
            where: { nr_chamada: m.chamada,
                     nm_turma: m.turma }
        })


        if (alunoRepetido.length != 0) {
            resp.send({ erro: 'Aluno já cadastrado!' })
        } else {
            let r = await db.tb_matricula.create(inserirMatrucula);
            resp.sendStatus(200);    
        }        

    } catch (e) {
        resp.send({erro: e.toString()});
    }
})





// ALTERA UMA MATRICULA

app.put('/matriculas/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let m = req.body;

        let matricula = await db.tb_matricula.update(
            {
                nm_aluno: m.nome,
                nr_chamada: m.chamada,
                nm_curso: m.curso,
                nm_turma: m.turma 
            },
            {
                where: {
                    id_matricula: id
                   }
            }
        );
        resp.sendStatus(200)

    } catch (e) {
        resp.send({erro: e.toString()});
    }
})



// DELETAR MATRICULA

app.delete('/matriculas/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let r = await db.tb_matricula.destroy({
            where: {id_matricula: id}
        })

        resp.sendStatus(200)

    } catch (e) {
        resp.send({erro: e.toString()})
    }
})





app.listen( process.env.PORT,
                    x => console.log(`Server up at PORT:${process.env.PORT}`) )


