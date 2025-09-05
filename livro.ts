interface ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    exibirDados(): void;
    atualizarEstoque(quantEs: number): void;
}

// LIVRO FÍSICO - CLASSE
class LivroFisico implements ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
    
    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: string, editora: string, estoque: number) {
        this.titulo = titulo;
        this.ano  = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }

    // Metódos do livro
    exibirDados(): void {
        console.log(`--> DADOS DO LIVRO FÍSICO <--`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
    }

    atualizarEstoque(quantEs: number): void {
       this.estoque += quantEs;
       console.log(`Estoque atualizado. A nova quantidade é: ${this.estoque}`);
    }

}

// LIVRO EBOOK - CLASSE
class LivroEbook implements ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
    private tamanhoArq: string;
    
    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: string, editora: string, estoque: number, tamanhoArq: string) {
        this.titulo = titulo;
        this.ano  = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanhoArq = tamanhoArq;
    }

    // Metódos do livro
    exibirDados(): void {
        console.log(`--> DADOS DO LIVRO EBOOK <--`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Tamanho do Arquivo: ${this.tamanhoArq}`);
    }

    atualizarEstoque(quantEs: number): void {
       this.estoque += quantEs;
       console.log(`Estoque atualizado. A nova quantidade é: ${this.estoque}`);
    }
}

// GERENCIAR LIVRARIA - CLASSE
class GerenciarLivraria {
    private livros: ILivro[] = [];

    adicionarLivro(newLivro: ILivro): void {
        this.livros.push(newLivro);
        console.log(`O livro ${newLivro.titulo} foi adicionado a livraria! `);
    }

    removerLivro(titulo: string): void {
        const livroRem = this.livros.findIndex(k => k.titulo === titulo);

        if(livroRem !== -1) {
            this.livros.splice(livroRem, 1);
            console.log(`O livro foi encontrado e removido!`);
        }
        else {
            console.log(`Ò livro não foi encontrado! `);
        }
    }

    venderLivro(isbn: string, quantidade: number = 1): void {
        const livroVen = this.livros.find(k => k.isbn === isbn);

        if(livroVen) {
            if(livroVen.estoque >= quantidade) {
                livroVen.atualizarEstoque(-quantidade);
                console.log(`Venda realizada com sucesso! `)
            }
            else {
                console.log(`A quantidade solicitada está indisponível! `);
            }
        }
        else {
            console.log(`Esse livro não está disponível no estoque! `);
        }
    }
}

// Manipulação do código
const acotar = new LivroFisico("Corte de Névoa e Fúria", 2018, "1-23456", 50, "Sarah J. Mass", "Galera Record", 2);
const tog = new LivroEbook("Trono de Vidro", 2012, "6-54321", 60, "Sarah J. Mass", "Galera Record", 5, "200gb");
const livraria = new GerenciarLivraria();

livraria.adicionarLivro(acotar);
livraria.adicionarLivro(tog);

livraria.removerLivro("Corte de Névoa e Fúria");

livraria.venderLivro("6-54321", 1);