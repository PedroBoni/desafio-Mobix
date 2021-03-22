export default function register(permissions){
   let res = {
      "Análise": {
        "Análise de contas": {
          "Ver listagem": permissions[0],
          "Ver detalhes": permissions[10],
          "Criar": permissions[20],
          "Editar": permissions[30],
          "Deletar": permissions[40]
        },
        "Análisá de transações": {
          "Ver listagem": permissions[1],
          "Ver detalhes": permissions[11],
          "Criar": permissions[21],
          "Editar": permissions[31],
          "Deletar": permissions[41]
        }
      },
      "Contas": {
        "Cliente": {
          "Ver listagem": permissions[2],
          "Ver detalhes": permissions[12],
          "Criar": permissions[22],
          "Editar": permissions[32],
          "Deletar": permissions[42]
        },
        "Transações": {
          "Ver listagem": permissions[3],
          "Ver detalhes": permissions[13],
          "Criar": permissions[23],
          "Editar": permissions[33],
          "Deletar": permissions[43]
        },
        "Contas digitais": {
          "Ver listagem": permissions[4],
          "Ver detalhes": permissions[14],
          "Criar": permissions[24],
          "Editar": permissions[34],
          "Deletar": permissions[44]
        }
      },
      "Constomização": {
        "Limites e horários":{
          "Ver listagem": permissions[5],
          "Ver detalhes": permissions[15],
          "Criar": permissions[25],
          "Editar": permissions[35],
          "Deletar": permissions[45]
        },
        "Tarifas":{
          "Ver listagem": permissions[6],
          "Ver detalhes": permissions[16],
          "Criar": permissions[26],
          "Editar": permissions[36],
          "Deletar": permissions[46]
        },
        "Tarifas personalizadas":{
          "Ver listagem": permissions[7],
          "Ver detalhes": permissions[17],
          "Criar": permissions[27],
          "Editar": permissions[37],
          "Deletar": permissions[47]
        },
        "Conta":{
          "Ver listagem": permissions[8],
          "Ver detalhes": permissions[18],
          "Criar": permissions[28],
          "Editar": permissions[38],
          "Deletar": permissions[48]
        }
      },
      "Financeiro":{
        "Entradas":{
          "Ver listagem": permissions[9],
          "Ver detalhes": permissions[19],
          "Criar": permissions[29],
          "Editar": permissions[39],
          "Deletar": permissions[49]
        }
      }
    }
    console.log(res)
}
