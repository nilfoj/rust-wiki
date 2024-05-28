As funções são blocos de código criadas para executar uma tarefa especifica, deixando seu código mais organizado, facilitando o processo de manutenção e o deixando mais fácil de ler. 

Função:

fn nome_da_funcao(parametros) -> tipo_de_retorno {
    corpo_da_funcao
}

Exemplo: 

fn soma (a: i8, b: i8) -> i8{
    a + b
}

Ao criar uma função você precisa chamar ela no seu código e passar os argumentos (valor), recomendo colocar suas funções abaixo do main!

fn main () {
    let resultado = soma (10, 20);
    println!("{resultado}");
}

fn main () {
    let resultado = soma (10, 20);
    println!("{resultado}");
}

[Função!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=729b503ae8f0693e6e8e7307fd29d11b)

Importante! 
Nesse momento você precisa treinar a criação de funções mais simples, então vamos juntos resolver alguns desafios e um pouco mais na frente vamos praticar melhor o uso de funções mais complexas.  

[{O1} Problema](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=5ebb4be20c2e1b2a2590c2d94d3237aa)
[{O1} Solução](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=92b7622a3f1596f67e9177c745b95763)

[{O2} Problema](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=f42c448f24a82f0cbf69edc4e5133bcf)
[{O2.01} Solução](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=6b3a7a725bc89e2737688792c75fc7dd)
[{O2.02} Solução](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=40297205f80582e0e758ecf5ebcd3a45)

[{O3} Problema](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=1bea3d61b338c84f51aa9730cc111d3c)
[{O3} Solução](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=18eb19c63c1a6caf77d498b638073eb1)

