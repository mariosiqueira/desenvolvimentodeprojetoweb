var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
    ];

function imprimirAcervo(library){
    console.log('########## Acervo ###########\n')
    library.forEach(item => {
        console.log('Título da Obra: ' + item.title);
        console.log('Nome do Autor: ' + item.author);
        console.log('Status da Leitura da Obra: ' + item.readingStatus + '\n');
    })
    console.log('#############################')
}

imprimirAcervo(library);
