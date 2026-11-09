import express from "express";

const app = express();
const porta = 3000;

const capitais: Record<string, string> = {
    SP: "São Paulo",
    RJ: "Rio de Janeiro",
    BA: "Salvador",
    MG: "Belo Horizonte",
    AM: "Manaus",
    DF: "Brasília"
};

app.get("/estados/:sigla", (req, res) => {
    const sigla = req.params.sigla.toUpperCase();
    const capital = capitais[sigla];

    if (capital) {
        res.status(200).json({
            "sigla": sigla,
            "capital": capital
        })
    } else {
        res.status(404).json({
            "erro": "Estado não encontrado."
        })
    }
});

app.listen(porta, () => {
    console.log(`Servidor executando em http://localhost:${porta}`);
});