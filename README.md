# angular-shots


**Proposta:**  
Implementar uma aplicação completamente client-side, que consulte a API do Dribbble e mostre os shots mais populares. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.  

**API**: [http://developer.dribbble.com/v1/ ](http://developer.dribbble.com/v1/)

## Demo
    http://165.227.208.51/angular-shots/#/

## Instalação

    $ git clone https://github.com/johnromulo/angular-shots.git && cd angular-shots
    $ npm install

## Build Desenvolvimento

    $ gulp sass:watch //Para buildar automaticamente os arquivos de .scss para .css
    $ gulp generatejs //Para adicionar as dependencias .js ao index.html


## Build Produção

    $ gulp sass:watch //Para buildar automaticamente os arquivos de .scss para .css
    $ gulp managerjs --prod //Para Minificar os aqruivos .js e adicioná-lo ao index.html
