# Documentação da API

## Introdução

A API tem como objetivo fazer a ligação do frontEnd com o backEnd para criar, buscar e atualizar os dados dos utilizadores a base de dados.

---
## Como usar

A API tem no total 1 endpoint com 2 metodos

**URL (api/contas/)**


## Metodos
- POST

    Para usar este metodo ele precisa receber dados em formato **JSON** e precisa que o **HEADER** seja **"Content-Type": "application/json"**
    
    Recebe Dados em **JSON** pelo **BODY**.
    
    Em caso de sucesso irá retornar o **status 202**. E será chamada a função ["insertConta"](###insertConta) para efetuar a passagem desses dados para a Base de dados. 


## Glossário

- ### insertConta

    A função pede como **parametros** os dados em **JSON** e realiza a ligação com a Base de Dados, para tal necessita o **nome da Base de Dados** e o **nome da coleção** para qual vai os dados. Apos isso a função faz com que sejam inseridos uma **unica vez** os dados recebidos por ela na Base de Dados.