📝 Descrição
Para esse projeto, vamos fazer um sistema de compra de ingressos de um cinema!
Nele, será possível ver os filmes em cartaz, os horários de exibição e até mesmo escolher o assento desejado.
Para fazer esse projeto, você irá utilizar uma API que irá receber e enviar informações para a sua aplicação, simulando um cenário bem próximo da realidade 😄

📙 Documentação da API
- GET Obter lista de filmes
    - Para obter os filmes, faça uma requisição GET para a URL: https://mock-api.driven.com.br/api/v8/cineflex/movies
      O servidor responde a esta requisição com um array de objetos que representam os filmes:
      [
	{
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    }
]

- GET Obter lista de sessões de um filme
    - Para obter as sessões de um filme, faça uma requisição GET para a URL (trocando ID_DO_FILME para o id do filme desejado.): https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes
    - O servidor responde a esta requisição com um objeto que representa o filme com os dias e suas sessões:
    {
    "id": 1,
    "title": "2067",
    "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
    "releaseDate": "2020-10-01T00:00:00.000Z",
    "days": [
        {
            "id": 24062021,
            "weekday": "Quinta-feira",
            "date": "24/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 1
                },
                {
                    "name": "19:00",
                    "id": 2
                }
            ]
        },
        {
            "id": 25062021,
            "weekday": "Sexta-feira",
            "date": "25/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 3
                },
                {
                    "name": "19:00",
                    "id": 4
                }
            ]
        },
        {
            "id": 26062021,
            "weekday": "Sábado",
            "date": "26/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 5
                },
                {
                    "name": "19:00",
                    "id": 6
                }
            ]
        },
        {
            "id": 27062021,
            "weekday": "Domingo",
            "date": "27/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 7
                },
                {
                    "name": "19:00",
                    "id": 8
                }
            ]
        },
        {
            "id": 28062021,
            "weekday": "Segunda-feira",
            "date": "28/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 9
                },
                {
                    "name": "19:00",
                    "id": 10
                }
            ]
        },
        {
            "id": 29062021,
            "weekday": "Terça-feira",
            "date": "29/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 11
                },
                {
                    "name": "19:00",
                    "id": 12
                }
            ]
        },
        {
            "id": 30062021,
            "weekday": "Quarta-feira",
            "date": "30/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 13
                },
                {
                    "name": "19:00",
                    "id": 14
                }
            ]
        },
        {
            "id": 1072021,
            "weekday": "Quinta-feira",
            "date": "01/07/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 15
                },
                {
                    "name": "19:00",
                    "id": 16
                }
            ]
        }
    ]
}

- GET Obter lista de assentos de uma sessão
    - Para obter os assentos disponíveis de uma sessão, faça uma requisição GET para a URL (trocando ID_DA_SESSAO para a id da sessão desejada): https://mock-api.driven.com.br/api/v8/cineflex/showtimes/ID_DA_SESSAO/seats
    - O servidor responde a esta requisição com um objeto que representa a sessão com seus dias, seu filme e a lista de assentos:
    {
    "id": 1,
    "name": "15:00",
    "day": {
			"id": 24062021,
      "weekday": "Quinta-feira",
      "date": "24/06/2021",
		},
    "movie": {
        "id": 1,
        "title": "2067",
        "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        "releaseDate": "2020-10-01T00:00:00.000Z",
    },
    "seats": [
				{
            "id": 10001,
            "name": "1",
            "isAvailable": false,
        },
        {
            "id": 10002,
            "name": "2",
            "isAvailable": true,
        },
        {
            "id": 10003,
            "name": "3",
            "isAvailable": true,
        },
        {
            "id": 10004,
            "name": "4",
            "isAvailable": true,
        },
        {
            "id": 10005,
            "name": "5",
            "isAvailable": true,
        },
        {
            "id": 10006,
            "name": "6",
            "isAvailable": true,
        },
        {
            "id": 10007,
            "name": "7",
            "isAvailable": true,
        },
        {
            "id": 10008,
            "name": "8",
            "isAvailable": true,
        },
        {
            "id": 10009,
            "name": "9",
            "isAvailable": true,
        },
        {
            "id": 10010,
            "name": "10",
            "isAvailable": true,
        },
        {
            "id": 10011,
            "name": "11",
            "isAvailable": true,
        },
        {
            "id": 10012,
            "name": "12",
            "isAvailable": true,
        },
        {
            "id": 10013,
            "name": "13",
            "isAvailable": true,
        },
        {
            "id": 10014,
            "name": "14",
            "isAvailable": true,
        },
        {
            "id": 10015,
            "name": "15",
            "isAvailable": true,
        },
        {
            "id": 10016,
            "name": "16",
            "isAvailable": true,
        },
        {
            "id": 10017,
            "name": "17",
            "isAvailable": true,
        },
        {
            "id": 10018,
            "name": "18",
            "isAvailable": true,
        },
        {
            "id": 10019,
            "name": "19",
            "isAvailable": true,
        },
        {
            "id": 10020,
            "name": "20",
            "isAvailable": true,
        },
        {
            "id": 10021,
            "name": "21",
            "isAvailable": true,
        },
        {
            "id": 10022,
            "name": "22",
            "isAvailable": true,
        },
        {
            "id": 10023,
            "name": "23",
            "isAvailable": true,
        },
        {
            "id": 10024,
            "name": "24",
            "isAvailable": true,
        },
        {
            "id": 10025,
            "name": "25",
            "isAvailable": true,
        },
        {
            "id": 10026,
            "name": "26",
            "isAvailable": true,
        },
        {
            "id": 10027,
            "name": "27",
            "isAvailable": true,
        },
        {
            "id": 10028,
            "name": "28",
            "isAvailable": true,
        },
        {
            "id": 10029,
            "name": "29",
            "isAvailable": true,
        },
        {
            "id": 10030,
            "name": "30",
            "isAvailable": true,
        },
        {
            "id": 10031,
            "name": "31",
            "isAvailable": true,
        },
        {
            "id": 10032,
            "name": "32",
            "isAvailable": true,
        },
        {
            "id": 10033,
            "name": "33",
            "isAvailable": true,
        },
        {
            "id": 10034,
            "name": "34",
            "isAvailable": true,
        },
        {
            "id": 10035,
            "name": "35",
            "isAvailable": true,
        },
        {
            "id": 10036,
            "name": "36",
            "isAvailable": true,
        },
        {
            "id": 10037,
            "name": "37",
            "isAvailable": true,
        },
        {
            "id": 10038,
            "name": "38",
            "isAvailable": true,
        },
        {
            "id": 10039,
            "name": "39",
            "isAvailable": true,
        },
        {
            "id": 10040,
            "name": "40",
            "isAvailable": true,
        },
        {
            "id": 10041,
            "name": "41",
            "isAvailable": true,
        },
        {
            "id": 10042,
            "name": "42",
            "isAvailable": true,
        },
        {
            "id": 10043,
            "name": "43",
            "isAvailable": true,
        },
        {
            "id": 10044,
            "name": "44",
            "isAvailable": true,
        },
        {
            "id": 10045,
            "name": "45",
            "isAvailable": true,
        },
        {
            "id": 10046,
            "name": "46",
            "isAvailable": true,
        },
        {
            "id": 10047,
            "name": "47",
            "isAvailable": true,
        },
        {
            "id": 10048,
            "name": "48",
            "isAvailable": true,
        },
        {
            "id": 10049,
            "name": "49",
            "isAvailable": true,
        },
        {
            "id": 10050,
            "name": "50",
            "isAvailable": true,
        },
    ]
}

- POST Reservar assentos
    - Para reservar assentos, faça uma requisição POST para a URL: https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many
    - Enviando no corpo da requisição um objeto no formato abaixo, sendo ids a array de ids dos assentos que você deseja reservar. Note que você deve enviar os IDs dos assentos, e não os seus nomes (name): 
    {
	ids: [10015, 10016, 10017],
	name: "Fulano",
	cpf: "12345678900"
}

✅ Requisitos
- Geral
    - Manipule o HTML usando somente React (sem usar o document nem o localStorage). 
    - O uso de styled-components é obrigatório.
    - O uso do Vite para a criação do projeto é obrigatória.
    - Não é permitido o uso de context.

- Layout
    - O layout é apenas para mobile, seguindo figma fornecido (não é necessário implementar um layout para desktop).
    - Use exatamente as cores indicadas no Figma para assento “Disponível”, “Selecionado” e “Indisponível”.
    - Disponível é o verde, liso, com número dentro;
    - Selecionado é o amarelo com borda rosa e número dentro;
    - Indisponível é o azulado, que é da mesma cor que o texto dos números. Por conta disso, o número está lá, mas fica “escondido”, já que tem a mesma cor que o fundo.
    - Note que as medidas do tamanho das telas no figma são apenas para referência! 
    - Apesar de o projeto ser apenas mobile, celulares diferentes possuem dimensões diferentes e seu site deve funcionar independentemente disso. 
    - A tela não deve ter tamanho fixo. Teste o seu layout com várias dimensões de tela diferentes.

- Escolha de Filme (rota /)
    - Buscar as informações dos filmes pela API fornecida e exibir conforme layout do figma.
    - Ao clicar em um filme, o usuário deve ser redirecionado para a rota /sessoes/:idFilme, sendo :idFilme o id do filme clicado.

- Escolha de Sessão (rota /sessoes/:idFilme)
    - A partir do id da URL, obtenha da API as sessões disponíveis para o filme e exiba conforme o layout fornecido.
    - Ao clicar em uma sessão, o usuário deve ser redirecionado para a rota /assentos/:idSessao, onde :idSessao é o id da sessão escolhida.

- Escolha de Assentos (rota /assentos/:idSessao)
    - A partir do id da URL, obtenha da API os assentos disponíveis para a sessão e exiba conforme o layout fornecido.
    - A partir do id da sessão, buscar os dados da sessão da API e exibir o layout conforme fornecido.
    - Ao clicar em um assento disponível, o assento deve ser marcado como "Selecionado".
    - Ao clicar novamente em um assento selecionado, este deve voltar para "Disponível".
    - Ao clicar em um assento indisponível, deverá ser exibido um alerta de "Esse assento não está disponível".
    - O usuário pode selecionar vários assentos.
    - O usuário deve poder inserir o nome e o CPF do comprador.
    - Ao clicar em "Reservar assento(s)", o pedido deve ser enviado para o servidor e o usuário deve ser redirecionado para a rota /sucesso.  Isso fará com os assentos marcados fiquem indisponíveis para outras marcações.
    - Atente-se às cores dos assentos em cada estado! Elas devem estar exatamente como no Figma.

- Sucesso (rota /sucesso)
    - Implementar layout conforme fornecido, exibindo os dados do pedido feito.
    - Ao clicar em "Voltar para Tela Inicial" o usuário deve voltar para a rota inicial (/), com o pedido zerado.

- Deploy
    - Ao terminar o projeto, você obrigatoriamente deverá realizar o deploy utilizando a Vercel.
    - Coloque o link do deploy no readme do projeto.

    
