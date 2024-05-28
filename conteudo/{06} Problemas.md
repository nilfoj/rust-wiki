
Chegou a hora de você usar todo o conhecimento que adquiriu até agora. A seguir você irá se deparar com questões simples, que possuem sua resolução e seu resultado e na qual você vai precisar criar o código para fazer o mesmo.

Lembre-se, ainda não estou pedindo para que entenda lógica de programação, mas que crie soluções a parti de um problema o qual você sabe o caminho que precisa seguir!

Vamos ter, um pouco mais na frente um momento dedicado a questões envolvendo lógica e que vai precisar pensar não só no código mais na ideia de como chegar no resultado desejado, então de um passo de cada vez e não tenha pressa, rapidinho juntos vamos está zerando o Hackerrank!

_---------------------------------------------------------------------------------------------_

[{O1} Problema](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=87b34813dec143ebd0f0c32100d7bccc)
[{O2} Solução](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=0b2e8f503ea381ddc1ece17618415933)

_---------------------------------------------------------------------------------------------_

https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=582192084cbe6d694943924fd34f6ef5

_---------------------------------------------------------------------------------------------_



_---------------------------------------------------------------------------------------------_



_---------------------------------------------------------------------------------------------_

**Em uma loja de eletrônicos, você está comprando 4 itens com descontos diferentes:**

- **Notebook:** Preço original R$ 2.500,00 com 15% de desconto.
- **Tablet:** Preço original R$ 800,00 com 10% de desconto.
- **Fone de ouvido:** Preço original R$ 150,00 com 25% de desconto.
- **Mouse:** Preço original R$ 50,00 com 5% de desconto.

**Calcule quanto você vai pagar no total pelos 4 itens.**

**Resolução:**

2. Para cada item, calcule o valor do desconto:
    - **Notebook:** Desconto = R$ 2.500,00 * 15% = R$ 375,00 Preço final = R$ 2.500,00 - R$ 375,00 = R$ 2.125,00
    - **Tablet:** Desconto = R$ 800,00 * 10% = R$ 80,00 Preço final = R$ 800,00 - R$ 80,00 = R$ 720,00
    - **Fone de ouvido:** Desconto = R$ 150,00 * 25% = R$ 37,50 Preço final = R$ 150,00 - R$ 37,50 = R$ 112,50
    - **Mouse:** Desconto = R$ 50,00 * 5% = R$ 2,50 Preço final = R$ 50,00 - R$ 2,50 = R$ 47,50

1. Calcule o total a pagar somando os preços finais de cada item:
    
    Total = R$ 2.125,00 + R$ 720,00 + R$ 112,50 + R$ 47,50 = R$ 3.005,00 

**Resposta:**

Você vai pagar **R$ 3.005,00** no total pelos 4 itens.


_---------------------------------------------------------------------------------------------_


Questão com Gasto de Combustível de um Carro

**Em uma viagem de 300 km, um carro percorreu 12 km/L na cidade e 18 km/L na rodovia. Sabendo que 40% do trajeto foi percorrido na cidade e 60% na rodovia, calcule o total de litros de combustíve**l** utilizados durante a viagem.**

**Resolução:**

2. **Calcular a distância percorrida na cidade e na rodovia:**
    
    - Distância na cidade = 40% * 300 km = 120 km
    - Distância na rodovia = 60% * 300 km = 180 km
    
4. **Calcular o consumo de combustível na cidade e na rodovia:**
    
    - Combustível na cidade = 120 km / 12 km/L = 10 litros
    - Combustível na rodovia = 180 km / 18 km/L = 10 litros
    
6. **Calcular o consumo total de combustível:**
    
    - Combustível total = Combustível na cidade + Combustível na rodovia = 10 litros + 10 litros = 20 litros
    

**Resposta:**

Foram utilizados **20 litros** de combustíve**l** durante a viagem.


_---------------------------------------------------------------------------------------------_


**Uma parede retangular de sua casa precisa ser pintada. A parede tem 3 metros de altura e 4 metros de largura. A tinta que você está utilizando rende 5 metros quadrados por litro e cada lata de tinta custa R$ 20,00. Calcule quantas latas de tinta você precisa comprar e qual será o custo total da pintura.**

**Resolução:**

2. **Calcular a área da parede:**

Área da parede = Altura * Largura = 3 metros * 4 metros = 12 metros quadrados

3. **Calcular a quantidade de tinta necessária:**

Quantidade de tinta = Área da parede / Rendimento da tinta = 12 metros quadrados / 5 metros quadrados/litro = 2,4 litros

4. **Arredondar a quantidade de tinta para cima, já que não é possível comprar parte de uma lata:**

Quantidade de latas = Quantidade de tinta / 1 litro/lata = 2,4 litros / 1 litro/lata = 3 latas

5. **Calcular o custo total da pintura:**

Custo total = Quantidade de latas * Preço por lata = 3 latas * R$ 20,00/lata = R$ 60,00

**Resposta:**

Você precisa comprar **3 latas de tinta** e o custo total da pintura será de **R$ 60,00**.


_---------------------------------------------------------------------------------------------_

