import {
  shouldExist,
} from './Action';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Possuir cor de fundo: rgb(253, 251, 251)', () => {
    cy.get('body')
      .should('have.css', 'backgroundColor', 'rgb(253, 251, 251)');
  });
})

describe('1 - Adicione uma cor de fundo específica para a página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Possuir cor de fundo: rgb(253, 251, 251)', () => {
    cy.get('body')
      .should('have.css', 'backgroundColor', 'rgb(253, 251, 251)');
  });
});

describe('2 - Adicione uma barra superior com um título', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A barra deve possuir o ID "cabecalho"', () => {
    shouldExist('#cabecalho');
  });

  it('A barra superior deve ser fixa no topo da página, com a propriedade top tendo o valor `0`', () => {
    cy.get('#cabecalho')
      .should('have.css', 'position', 'fixed')
      .should('have.css', 'top', '0px');
  });

  it('O título deve estar dentro da barra e possuir o ID "titulo", além de ser uma tag "h1"', () => {
    shouldExist('#cabecalho h1#titulo');
  });
});

describe('3 - Adicione uma foto sua à página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A foto deve ser inserida utilizando uma tag img com o ID "minha_foto"', () => {
    cy.get('img#minha_foto').should('have.attr', 'src');
  });
});

describe('4 - Adicione uma lista de lições aprendidas à página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A lista deve ser numerada e possuir o ID "licoes_aprendidas"', () => {
    shouldExist('ol#licoes_aprendidas');
  });

  it('A lista deve possuir 10 itens', () => {
    cy.get('ol#licoes_aprendidas').find('li').should('have.length', 10);
  });
});

describe('5 - Crie uma lista de lições que ainda deseja aprender para a página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A lista não deve ser numerada e deve possuir o ID "licoes_a_aprender"', () => {
    shouldExist('ul#licoes_a_aprender');
  });

  it('A lista deve possuir 10 itens', () => {
    cy.get('ul#licoes_a_aprender').find('li').should('have.length', 10);
  });
});

describe('6 - Adicione um rodapé para a página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('O rodapé deve possuir o ID "rodape"', () => {
    cy.get('footer#rodape').should('exist');
  });
});

describe('7 - Insira pelo menos um link externo na página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A configuração desse link deve ser feita para abrir em uma nova aba do navegador', () => {
    cy.get('a')
      .then((a) => {
        const actual = Array.from(a).some((element) => (
          element.target === '_blank' && element.href !== ''
        ));
        expect(actual).to.be.true;
      });
  });
});

describe('8 - Crie um artigo sobre seu aprendizado', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A `tag` `article` devem ser utilizadas', () => {
    shouldExist('article');
  });

  it('O artigo deve ter mais de 300 caracteres e menos de 600', () => {
    cy.get('article')
      .invoke('text')
      .then((text) => {
        expect(text).to.have.length.of.at.most(600);
        expect(text).to.have.length.of.at.above(300);
      });
  });
});

describe('9 - Crie uma seção que conta uma passagem sobre seu aprendizado', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A `tag` `aside` deve ser utilizada', () => {
    shouldExist('aside');
  });

  it('A seção deve ter mais que 100 caracteres e menos que 300', () => {
    cy.get('aside')
      .invoke('text')
      .then((text) => {
        expect(text).to.have.length.of.at.above(100);
        expect(text).to.have.length.of.at.most(300);
      });
  });
});

describe('10 - Aplique elementos HTML de acordo com o sentido e propósito de cada um deles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Validar se a página possui um elemento "article"', () => {
    shouldExist('article');
  });

  it('Validar se a página possui um elemento "header"', () => {
    shouldExist('header');
  });

  it('Validar se a página possui um elemento "nav"', () => {
    shouldExist('nav');
  });

  it('Validar se a página possui um elemento "section"', () => {
    shouldExist('section');
  });

  it('Validar se a página possui um elemento "aside"', () => {
    shouldExist('aside');
  });

  it('Validar se a página possui um elemento "footer"', () => {
    shouldExist('footer');
  });
});

describe('11 - Teste a semântica da sua página está aprovada pelo site CodeSniffer', () => {
  it('Seu site deve passar sem problemas na verificação de semântica do site CodeSniffer', () => {
    cy.readFile('./index.html').then((content) => {
      cy.visit('http://squizlabs.github.io/HTML_CodeSniffer/');
      cy.get('#runHTMLCS').click();
      cy.get('#source').invoke('val', content).trigger('input');
      cy.get('#run-button').click();
      cy.get('.result-count-errors').contains(/^0$/);
    });
  });

});

describe('12 - Adicione uma tabela à página', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('A página deve possuir uma tabela', () => {
    shouldExist('table');
  });
});

describe('13 - Utilize o Box model', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Altere `margin`, `padding` e `border` dos elementos para ver, na prática, como esses atributos influenciam e melhoram a visualização dos componentes', () => {
    cy.readFile('./style.css').then((content) => {
      const styles = ['margin', 'padding', 'border'];
      expect(styles.every((style) => content.match(style)), 'Do not match styles margin, padding and border').to.be.true;
    });
  });
});

describe('14 - Altere atributos relacionados as fontes', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Altere o tamanho da letra', () => {
    const styles = [
      /font:/,
      /font-size:/,
    ];
    verifyExistingStyle(styles);
  });

  it('Altere a cor da letra', () => {
    const styles = [
      /font:/,
      /[^-]color:/,
    ];
    verifyExistingStyle(styles);
  });

  it('Altere o espaçamento entre as linhas', () => {
    const styles = [
      /font:/,
      /line-height:/,
    ];
    verifyExistingStyle(styles);
  });

  it('Altere o `font-family`', () => {
    const styles = [
      /font:/,
      /font-family:/,
    ];
    verifyExistingStyle(styles);
  });
});

describe('15 - Posicione o seu artigo e a seção sobre aprendizados um ao lado do outro', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Utilizar a classe "lado-esquerdo"', () => {
    shouldExist('.lado-esquerdo');
  });

  it('Utilizar a classe "lado-direito"', () => {
    shouldExist('.lado-direito');
  });

  it('Verificar se os elementos com as classes lado-direito e lado-esquerdo estão posicionados corretamente', () => {
    cy.document().then((doc) => {
      const leftSide = {
        top: evaluateOffset(doc, '.lado-esquerdo', 'Top'),
        height: evaluateOffset(doc, '.lado-esquerdo', 'Height'),
      };

      const rightSide = {
        top: evaluateOffset(doc, '.lado-direito', 'Top'),
        height: evaluateOffset(doc, '.lado-direito', 'Height'),
      };

      expect(isSidebySide(leftSide, rightSide), 'Not side by side. *hint - search for float, width and positioning properties to achieve this requirement*').to.be.true;
    });
  });
});
