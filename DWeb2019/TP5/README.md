# Prémios Nobel

O Prémio Nobel é um conjunto de seis prêmios internacionais anuais concedidos em várias categorias por instituições suecas e norueguesas, para reconhecer pessoas ou instituições que realizaram pesquisas, descobertas ou contribuições notáveis para a humanidade no ano imediatamente anterior ou no curso de suas atividades.

O último desejo do cientista sueco Alfred Nobel estabeleceu os prêmios em 1895. Os prêmios em Química, Literatura, Paz, Física e Fisiologia ou Medicina foram concedidos pela primeira vez em 1901. Em 1968, o Sveriges Riksbank estabeleceu o Prêmio de Ciências Econômicas em Memória de Alfred Nobel, que, embora não seja um Prêmio Nobel, tem sido comumente conhecido como o Prêmio Nobel de Economia. O Prêmio Nobel é amplamente considerado como o mais prestigiado prêmio disponível nas áreas de literatura, medicina, física, química, economia e ativismo pela paz.

Neste exercício, terás de:

1. Converter o dataset disponibilizado nos recursos para um formato à tua escolha, ou usá-lo como está (há vários conversores online de XML para JSON e outros formatos), e colocá-lo no sistema que usarás para assegurar a sua persistência: ficheiro, MongoDB, json-server, etc;
2. Criar um servidor nodejs que dê suporte à seguinte API de dados (note que não é necessário qualquer interface web):
   - GET /api/premios - Devolve a lista de prémios apenas com os campos "year" e "category";
   - GET /api/premios/:id - Devolve a informação completa de um prémio;
   - GET /api/categorias - Devolve a lista de categorias, sem repetições;
   - GET /api/premios?categoria=YYY - Devolve a lista de prémios que tenham o campo "category" com o valor "YYY";
   - GET /api/premios?categoria=YYY&data=AAAA - Devolve a lista de prémios que tenham o campo "category" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
   - GET /api/laureados - Devolve uma lista ordenada alfabeticamente por nome dos laureados com os campos correspondentes ao nome, ano do prémio e categoria.