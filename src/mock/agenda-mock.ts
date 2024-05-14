export class AgendaMock {
    
    public static mockItemAgenda() {
        return {
            id: 1,
            nome: "Fulano de tal",
            telefone: "92 9999-9999",
            endereco: "Rua sem fim, s/n"
        }
    }

    public static mockListaAgenda() {
        return [ 
            {
                id: 1,
                nome: "Fulano de tal",
                telefone: "92 9999-9999",
                endereco: "Rua sem fim, s/n"
            },
            {
                id: 2,
                nome: "Ciclano de tal",
                telefone: "92 5555-5555",
                endereco: "Rua sem rumo, s/n"
            }
        ]
    }

}