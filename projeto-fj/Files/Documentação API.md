# Documentação da API

## Introdução

A API tem como objetivo fazer a ligação do frontEnd com o backEnd para criar, buscar e atualizar os dados dos utilizadores a base de dados.

---
## Como usar

A API tem no total 1 endpoint com 2 metodos

---
**URL (api/contas/)**


## Metodos
- POST

    Para usar este metodo ele precisa receber dados em formato **JSON** e precisa que o **HEADER** seja **"Content-Type": "application/json"**

    Os dados **JSON** tem a seguinte estrutura:

    `info = {
        nome: string,
        email: string,
        password: string,
        morada: string,
        telemovel: string,
    }`
    
    Recebe Dados em **JSON** pelo **BODY**.
    
    Em caso de sucesso irá retornar o **status 202**. E será chamada a função ["insertConta"](###insertConta) para efetuar a passagem desses dados para a Base de dados. 

---
**URL (api/contas/login)**


## Metodos
- POST

    Para usar este metodo ele precisa receber dados em formato **JSON** e precisa que o **HEADER** seja **"Content-Type": "application/json"**

    Os dados **JSON** tem a seguinte estrutura:

    `info = {
        email: string,
        password: string,
    }`
    
    Recebe Dados em **JSON** pelo **BODY**.
    
    É verificado se o email existe na Base de Dados com a função ["getUserByEmail"](###getUserById).

    Se existir ele irá returnar o **status 200** com a seguinte mensagem "Funciona"

    Caso a verificação falhar ira ser returnar o **status 404** com a seguite mensagem "O utilizador não foi encontrado!"

    Caso a verificação passe pelo email mas a password esteja errada irá returnar **status 401** com a seguinte mensagem "A password introduzida é inválida!" 

---
**URL (api/Ofertas/)**


## Metodos
- POST

    Para usar este metodo ele precisa receber dados em formato **JSON** e precisa que o **HEADER** seja **"Content-Type": "application/json"**

    Os dados **JSON** tem a seguinte estrutura:

    `info = {
        serviço: string,
        regiao: string,
        horaInico: string,
        horaFim: string,
        valor: string,
    }`
    
    Recebe Dados em **JSON** pelo **BODY**.
    
    É enviado os dados JSON para a Base de Dados com a função ["insertOferta"](###insertOferta).

    Se existir ele irá returnar o **status 200** com a seguinte mensagem "Funcionou o POST" e com o id que recebe de resposta do MONGODB.

    Caso a ação não seja um sucesso é retornado o **status 404** com a seguinte mensagem "Não deu certo"

---
**URL (api/Ofertas/[get])**


## Metodos
- GET (Atualmente não esta funcional)

    Para se usar este metodo ele precisa de receber um **ID** pelo **URL** que vem do POST das Ofertas explicado acima.

    É feita uma verificação utilizando a função [getOferta](###getOferta) que envia esse id para a Base de Dados.

    Caso seja sucesso irá retornar o **status 200** com a seguinte mensagem "Funcionou o GET"

    Caso não tenha sucesso irá ser retonado o **status 404** com a seguinte mensagem "Não deu certo"

## Glossário

- ### insertConta

    A função pede como **parametros** os dados em **JSON** e realiza a ligação com a Base de Dados, para tal necessita o **nome da Base de Dados** e o **nome da coleção** para qual vai os dados. Apos isso a função faz com que sejam inseridos uma **unica vez** os dados recebidos por ela na Base de Dados.

- ### getUserByEmail

    A função pede como **parametros** o email em **JSON** e realiza a ligação com a Base de Dados, para tal necessita o **nome da Base de Dados** e o **nome da coleção** para qual vai os dados. Apos isso a função irá fazer uma procura uma **unica vez** na Base de Dados e retorna true ou false.

- ### insertOferta

    A funcão pede como **parametros** os dados em **JSON** e realiza a ligação com a Base de Dados, para tal necessita o **nome da Base de Dados** e o **nome da coleção** para qual vai os dados. Apos isso a função irá inserir uma **unica vez** na Base de Dados e retorná o **inserteID** dos dados.

- ### getOferta

    A função pede como **parametros** o ID em **JSON** e realiza a ligação com a Base de Dados, para tal necessita o **nome da Base de Dados** e o **nome da coleção** para qual vai os dados. Apos isso a função irá fazer uma procura uma **unica vez** na Base de Dados e retorna os dados correspondentes ao **ID** em **JSON**