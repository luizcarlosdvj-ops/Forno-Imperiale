document.addEventListener("DOMContentLoaded", function () {
  /* CARROSSEL */
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    if (slides[index]) {
      slides[index].classList.add("active");
    }
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(nextSlide, 5000);
  }

  /* MENU MOBILE */
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  /* SISTEMA DE IDIOMAS  */
  const traducoes = {
    pt: {
      home: "Home",
      cardapio: "Cardápio",
      reserva: "Fazer Reserva",
      cap1: "Prato Especial da Casa",
      cap2: "Pizza Artesanal",
      cap3: "Sobremesas Deliciosas",
      cap4: "Massas Deliciosas",
      titulo_boasvindas: "Bem-vindo ao",
      especialidades: "Nossas Especialidades Imperiais",
      entradas: "Entradas Finas",
      entradas_desc: "Sabores delicados para iniciar sua experiência gastronômica.",
      frutos_mar: "Frutos do Mar",
      frutos_mar_desc: "Camarões selecionados e grelhados na perfeição.",
      grelhados: "Grelhados Nobres",
      grelhados_desc: "Cortes nobres preparados no fogo alto para selar o sabor.",
      sushi: "Sushi Gourmet",
      sushi_desc: "A fusão perfeita entre tradição e toque contemporâneo.",
      ver_detalhes: "Ver Detalhes",
      sobre: "Sobre o Forno Imperiale",
      sobre_desc: "Desde 1992, trazemos a essência da culinária italiana para o seu prato.",
      contato: "Contato",
      siga: "Siga-nos",
      direitos: "Todos os direitos reservados.",
      menu_entradas: "Entradas",
      menu_pratos: "Pratos Principais",
      menu_pizzas: "Pizzas",
      menu_sobremesas: "Sobremesas",
      menu_bebidas: "Bebidas",
      chef_recomenda: "Chef Recomenda",
      reserva_titulo: "Fazer Reserva",
      reserva_enviar: "Enviar Reserva",
      reserva_sucesso: "Reserva feita com sucesso! Olhe seu email para confirmar.",
      reserva_escolha: "Escolha o tipo de mesa",
      placeholder_nome: "Seu nome",
      placeholder_email: "Seu email",
      placeholder_criancas: "Número de crianças",
      placeholder_obs: "Observações",
      item_bruschetta_t: "Bruschetta Italiana",
      item_bruschetta_d: "Pão artesanal com tomate, manjericão e azeite.",
      item_carpaccio_t: "Carpaccio",
      item_carpaccio_d: "Finas fatias de carne com parmesão.",
      item_carbonara_t: "Spaghetti Carbonara",
      item_carbonara_d: "Massa italiana cremosa com pancetta e parmesão.",
      item_risoto_t: "Risoto de Camarão",
      item_risoto_d: "Risoto cremoso com camarões frescos e limão siciliano.",
      item_tiramisu_t: "Tiramisù",
      item_tiramisu_d: "Clássica sobremesa italiana com café e mascarpone.",
      item_panna_t: "Panna Cotta",
      item_panna_d: "Creme italiano com calda de frutas vermelhas.",
      item_vinho_t: "Vinho Tinto Italiano",
      item_vinho_d: "Seleção especial de vinhos italianos.",
      item_agua_t: "Água com Gás",
      item_agua_d: "Água mineral gelada.",
      menu_especialidades: "Especialidades Imperiais",
      massas: "Massas Artesanais",
      lasanhas: "Lasanha Forneada",
      pizzas: "Pizza Especial",
      ravioli: "Ravioli Fresco",
      lasanha_desc: "Receita tradicional com molho artesanal e muito queijo.",
      pizza_desc: "Manjericão fresco, muçarela de búfala e tomate cereja.",
      ravioli_desc: "Massa recheada ao molho de tomates frescos e ervas.",
      item_fettuccine_d: "Massa fresca ao molho de queijos com medalhão de filé.",
      item_carbonara_t: "Carbonara Imperial",
      item_carbonara_d: "Massa fresca envolta em creme de gemas, queijo pecorino e pancetta crocante.",
      item_parma_t: "Pizza de Parma e Rúcula",
      item_parma_d: "Presunto parma selecionado, folhas frescas de rúcula e lascas de parmesão.",
      item_pizza_calabresa_t: "Calabresa Imperial",
      item_pizza_calabresa_d: "Calabresa artesanal defumada, cebolas roxas e azeitonas pretas sobre molho de tomate fresco.",
      item_pizza_marguerita_t: "Marguerita Clássica",
      item_pizza_marguerita_d: "A legítima combinação italiana: muçarela de búfala, manjericão fresco e azeite extravirgem.",
      item_pizza_pepperoni_t: "Pepperoni Supremo",
      item_pizza_pepperoni_d: "Fatias crocantes de pepperoni premium com um toque levemente picante e muito queijo derretido.",
      item_torta_t: "Torta de Morango",
      item_torta_d: "Base crocante com creme suave e morangos frescos selecionados.",
      item_tiramisu_t: "Tiramisù Tradicional",
      item_tiramisu_d: "Clássico italiano com camadas de biscoito, café e creme mascarpone.",
      item_palha_t: "Palha Italiana",
      item_palha_d: "Delicioso brigadeiro gourmet com pedaços de biscoito e toque de leite em pó.",
      vinho_desc: "Vinho tinto italiano de alta qualidade, encorpado e com notas de frutas maduras.",
      soda_desc: "Refrescante combinação de água gaseificada, fatias de limão siciliano e gelo.",
      entradas_desc: "Sabores delicados para iniciar sua experiência gastronômica.",
      frutos_mar_desc: "Camarões selecionados e grelhados na perfeição.",
      grelhados_desc: "Cortes nobres preparados no fogo alto para selar o sabor.",
      sushi_desc: "A fusão perfeita entre tradição e toque contemporâneo.",
      item_antipasto_t: "Antipasto della Casa",
      item_antipasto_d: "Seleção de frios italianos, azeitonas marinadas e queijos curados.",
      item_limonata_t: "Limonata Frizzante",
      item_limonata_d: "Limonada artesanal com limão siciliano espremido na hora e água com gás gelada.",
      item_espresso_t: "Espresso Italiano",
      item_espresso_d: "Café expresso encorpado, extraído lentamente, servido com casquinha de limão siciliano.",
    },
    en: {
      home: "Home",
      cardapio: "Menu",
      reserva: "Make a Reservation",
      cap1: "House Special Dish",
      cap2: "Artisan Pizza",
      cap3: "Delicious Desserts",
      cap4: "Delicious Pasta",
      titulo_boasvindas: "Welcome to",
      especialidades: "Our Imperial Specialties",
      entradas: "Fine Starters",
      entradas_desc: "Delicate flavors to start your dining experience.",
      frutos_mar: "Seafood",
      frutos_mar_desc: "Selected shrimp grilled to perfection.",
      grelhados: "Grilled Meats",
      grelhados_desc: "Premium cuts grilled over high heat.",
      sushi: "Gourmet Sushi",
      sushi_desc: "The perfect fusion between tradition and modern touch.",
      ver_detalhes: "See Details",
      sobre: "About Forno Imperiale",
      sobre_desc: "Since 1992, bringing the essence of Italian cuisine to your plate.",
      contato: "Contact",
      siga: "Follow us",
      direitos: "All rights reserved.",
      menu_entradas: "Starters",
      menu_pratos: "Main Dishes",
      menu_pizzas: "Pizzas",
      menu_sobremesas: "Desserts",
      menu_bebidas: "Drinks",
      chef_recomenda: "Chef's Choice",
      reserva_titulo: "Make Reservation",
      reserva_enviar: "Send Reservation",
      reserva_sucesso: "Reservation successful! Check your email.",
      reserva_escolha: "Choose table type",
      placeholder_nome: "Your name",
      placeholder_email: "Your email",
      placeholder_criancas: "Number of children",
      placeholder_obs: "Observations",
      item_bruschetta_t: "Italian Bruschetta",
      item_bruschetta_d: "Artisan bread with tomato, basil and olive oil.",
      item_carpaccio_t: "Carpaccio",
      item_carpaccio_d: "Thinly sliced beef with parmesan.",
      item_carbonara_t: "Spaghetti Carbonara",
      item_carbonara_d: "Creamy Italian pasta with pancetta and parmesan.",
      item_risoto_t: "Shrimp Risotto",
      item_risoto_d: "Creamy risotto with fresh shrimp and Sicilian lemon.",
      item_tiramisu_t: "Tiramisù",
      item_tiramisu_d: "Classic Italian dessert with coffee and mascarpone.",
      item_panna_t: "Panna Cotta",
      item_panna_d: "Italian cream with red berry sauce.",
      item_vinho_t: "Italian Red Wine",
      item_vinho_d: "Special selection of Italian wines.",
      item_agua_t: "Sparkling Water",
      item_agua_d: "Chilled mineral water.",
      menu_especialidades: "Imperial Specialties",
      massas: "Artisan Pasta",
      lasanhas: "Baked Lasagna",
      pizzas: "Special Pizza",
      ravioli: "Fresh Ravioli",
      lasanha_desc: "Traditional recipe with artisan sauce and plenty of cheese.",
      pizza_desc: "Fresh basil, buffalo mozzarella and cherry tomatoes.",
      ravioli_desc: "Stuffed pasta with fresh tomato and herb sauce.",
      item_fettuccine_d: "Fresh pasta with four-cheese sauce and beef medallion.",
      item_carbonara_t: "Imperial Carbonara",
      item_carbonara_d: "Fresh pasta in egg yolk cream, pecorino cheese and crispy pancetta.",
      item_parma_t: "Parma and Arugula Pizza",
      item_parma_d: "Selected Parma ham, fresh arugula leaves and Parmesan shavings.",
      item_pizza_calabresa_t: "Imperial Calabresa",
      item_pizza_calabresa_d: "Smoked artisan sausage, red onions and black olives on fresh tomato sauce.",
      item_pizza_marguerita_t: "Classic Margherita",
      item_pizza_marguerita_d: "The authentic Italian combination: buffalo mozzarella, fresh basil and extra virgin olive oil.",
      item_pizza_pepperoni_t: "Supreme Pepperoni",
      item_pizza_pepperoni_d: "Crispy premium pepperoni slices with a slightly spicy kick and lots of melted cheese.",
      item_torta_t: "Strawberry Tart",
      item_torta_d: "Crunchy base with smooth cream and selected fresh strawberries.",
      item_tiramisu_t: "Traditional Tiramisù",
      item_tiramisu_d: "Italian classic with layers of biscuit, coffee and mascarpone cream.",
      item_palha_t: "Italian Straw Candy",
      item_palha_d: "Delicious gourmet brigadeiro with biscuit pieces and a touch of powdered milk.",
      vinho_desc: "High quality Italian red wine, full-bodied with notes of ripe fruit.",
      soda_desc: "Refreshing blend of sparkling water, Sicilian lemon slices and ice.",
      entradas_desc: "Delicate flavors to start your dining experience.",
      frutos_mar_desc: "Selected shrimp grilled to perfection.",
      grelhados_desc: "Premium cuts grilled over high heat to seal in the flavor.",
      sushi_desc: "The perfect fusion between tradition and a contemporary touch.",
      item_antipasto_t: "House Antipasto",
      item_antipasto_d: "Selection of Italian cured meats, marinated olives and aged cheeses.",
      item_limonata_t: "Sparkling Lemonade",
      item_limonata_d: "Artisan lemonade with freshly squeezed Sicilian lemon and chilled sparkling water.",
      item_espresso_t: "Italian Espresso",
      item_espresso_d: "Full-bodied espresso, slowly extracted, served with a Sicilian lemon twist.",
    },
    it: {
      home: "Home",
      cardapio: "Menu",
      reserva: "Prenota un Tavolo",
      cap1: "Piatto Speciale",
      cap2: "Pizza Artigianale",
      cap3: "Dolci Deliziosi",
      cap4: "Pasta Deliziosa",
      titulo_boasvindas: "Benvenuti al",
      especialidades: "Le Nostre Specialità Imperiali",
      entradas: "Antipasti Fini",
      entradas_desc: "Sapori delicati per iniziare la tua esperienza.",
      frutos_mar: "Frutti di Mare",
      frutos_mar_desc: "Gamberi selezionati e grigliati alla perfezione.",
      grelhados: "Grigliate Nobili",
      grelhados_desc: "Tagli nobili preparati ad alta temperatura.",
      sushi: "Sushi Gourmet",
      sushi_desc: "La fusione perfeita tra tradizione e modernità.",
      ver_detalhes: "Vedi Dettagli",
      sobre: "Su Forno Imperiale",
      sobre_desc: "Dal 1992, portiamo l'essenza della cucina italiana nel tuo piatto.",
      contato: "Contatto",
      siga: "Seguici",
      direitos: "Tutti i diritti riservati.",
      menu_entradas: "Antipasti",
      menu_pratos: "Piatti Principali",
      menu_pizzas: "Pizze",
      menu_sobremesas: "Dolci",
      menu_bebidas: "Bevande",
      chef_recomenda: "Consigliato dallo Chef",
      reserva_titulo: "Prenota Tavolo",
      reserva_enviar: "Invia Prenotazione",
      reserva_sucesso: "Prenotazione effettuata! Controlla la tua email.",
      reserva_escolha: "Scegli il tipo di tavolo",
      placeholder_nome: "Il tuo nome",
      placeholder_email: "La tua email",
      placeholder_criancas: "Numero di bambini",
      placeholder_obs: "Osservazioni",
      item_bruschetta_t: "Bruschetta Italiana",
      item_bruschetta_d: "Pane artigianale con pomodoro, basilico e olio d'oliva.",
      item_carpaccio_t: "Carpaccio",
      item_carpaccio_d: "Sottili fette di carne con parmigiano.",
      item_carbonara_t: "Spaghetti alla Carbonara",
      item_carbonara_d: "Pasta cremosa con pancetta e parmigiano.",
      item_risoto_t: "Risotto ai Gamberi",
      item_risoto_d: "Risotto cremoso con gamberi freschi e limone siciliano.",
      item_tiramisu_t: "Tiramisù",
      item_tiramisu_d: "Classico dolce italiano con caffè e mascarpone.",
      item_panna_t: "Panna Cotta",
      item_panna_d: "Crema italiana con salsa ai frutti rossi.",
      item_vinho_t: "Vino Rosso Italiano",
      item_vinho_d: "Selezione speciale di vini italiani.",
      item_agua_t: "Acqua Frizzante",
      item_agua_d: "Acqua minerale fredda.",
      menu_especialidades: "Specialità Imperiali",
      massas: "Pasta Artigianale",
      lasanhas: "Lasagna al Forno",
      pizzas: "Pizza Speciale",
      ravioli: "Ravioli Freschi",
      lasanha_desc: "Ricetta tradizionale con sugo artigianale e tanto formaggio.",
      pizza_desc: "Basilico fresco, mozzarella di bufala e pomodorini.",
      ravioli_desc: "Pasta ripiena con sugo di pomodori freschi ed erbe aromatiche.",
      item_fettuccine_d: "Pasta fresca al sugo di formaggi con medaglione di filetto.",
      item_carbonara_t: "Carbonara Imperiale",
      item_carbonara_d: "Pasta fresca avvolta in crema di tuorli, pecorino e pancetta croccante.",
      item_parma_t: "Pizza Parma e Rucola",
      item_parma_d: "Prosciutto di Parma selezionato, foglie fresche di rucola e scaglie di parmigiano.",
      item_pizza_calabresa_t: "Calabrese Imperiale",
      item_pizza_calabresa_d: "Salsiccia artigianale affumicata, cipolle rosse e olive nere su salsa di pomodoro fresco.",
      item_pizza_marguerita_t: "Margherita Classica",
      item_pizza_marguerita_d: "L'autentica combinazione italiana: mozzarella di bufala, basilico fresco e olio extravergine.",
      item_pizza_pepperoni_t: "Pepperoni Supremo",
      item_pizza_pepperoni_d: "Fette croccanti di pepperoni premium con un tocco leggermente piccante e tanto formaggio fuso.",
      item_torta_t: "Crostata di Fragole",
      item_torta_d: "Base croccante con crema morbida e fragole fresche selezionate.",
      item_tiramisu_t: "Tiramisù Tradizionale",
      item_tiramisu_d: "Classico italiano con strati di biscotto, caffè e crema al mascarpone.",
      item_palha_t: "Palha Italiana",
      item_palha_d: "Delizioso brigadeiro gourmet con pezzi di biscotto e latte in polvere.",
      vinho_desc: "Vino rosso italiano di alta qualità, corposo con note di frutta matura.",
      soda_desc: "Rinfrescante combinazione di acqua frizzante, fette di limone siciliano e ghiaccio.",
      entradas_desc: "Sapori delicati per iniziare la tua experiência gastronomica.",
      frutos_mar_desc: "Gamberi selezionati e grigliati alla perfezione.",
      grelhados_desc: "Tagli nobili preparati ad alta temperatura per sigillare il sapore.",
      sushi_desc: "La fusione perfetta tra tradizione e tocco contemporaneo.",
      item_antipasto_t: "Antipasto della Casa",
      item_antipasto_d: "Seleção de salumi italiani, olive marinate e formaggi stagionati.",
      item_limonata_t: "Limonata Frizzante",
      item_limonata_d: "Limonata artigianale con limone siciliano spremuto al momento e acqua frizzante ghiacciata.",
      item_espresso_t: "Espresso Italiano",
      item_espresso_d: "Caffè espresso corposo, estratto lentamente, servito con una scorza di limone siciliano.",
    },
  };

  /* Expõe setLang globalmente para os botões onclick no HTML */
  window.setLang = function (lang) {
    localStorage.setItem("idiomaPreferido", lang);

    /* 1. Traduz todos os elementos com data-lang */
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const chave = el.getAttribute("data-lang");
      if (traducoes[lang] && traducoes[lang][chave]) {
        el.innerText = traducoes[lang][chave];
      }
    });

    /* 2. Traduz placeholders dos inputs (página de reserva) */
    const campos = {
      nome: "placeholder_nome",
      email: "placeholder_email",
      criancas: "placeholder_criancas",
      mensagem: "placeholder_obs",
    };
    Object.entries(campos).forEach(([id, chave]) => {
      const el = document.getElementById(id);
      if (el) el.placeholder = traducoes[lang][chave];
    });

    /* 3. Traduz as opções do select de mesas (página de reserva) */
    const selectMesa = document.getElementById("mesa");
    if (selectMesa) {
      const optTraducoes = {
        pt: ["Escolha o tipo de mesa", "Mesa padrão (2 pessoas) - R$50", "Mesa família (4 pessoas) - R$90", "Mesa VIP (6 pessoas) - R$150"],
        en: ["Choose table type", "Standard table (2 people) - R$50", "Family table (4 people) - R$90", "VIP table (6 people) - R$150"],
        it: ["Scegli il tipo di tavolo", "Tavolo standard (2 persone) - R$50", "Tavolo famiglia (4 persone) - R$90", "Tavolo VIP (6 persone) - R$150"],
      };
      Array.from(selectMesa.options).forEach((option, i) => {
        if (optTraducoes[lang][i]) {
          option.text = optTraducoes[lang][i];
        }
      });
    }

    /* 4. Recalcula preço se a função estiver disponível nesta página */
    if (typeof calcularPreco === "function") {
      calcularPreco();
    }
  };

  /* Aplica o idioma guardado (ou Português por defeito) */
  const langSalvo = localStorage.getItem("idiomaPreferido") || "pt";
  setLang(langSalvo);

  /* RESERVA — CÁLCULO DE PREÇO E VALIDAÇÃO */
  const mesa = document.getElementById("mesa");
  const criancas = document.getElementById("criancas");
  const precoTotal = document.getElementById("precoTotal");
  const formReserva = document.getElementById("formReserva");
  const mensagemSucesso = document.getElementById("mensagemSucesso");

  window.calcularPreco = function () {
    if (!mesa || !precoTotal) return;
    
    // Proteção para não aceitar crianças negativas no cálculo
    let numCriancas = parseInt(criancas ? criancas.value : 0) || 0;
    if (numCriancas < 0) {
        numCriancas = 0;
        criancas.value = 0;
    }

    const precoMesa = parseInt(mesa.value) || 0;
    const taxaCrianca = 20;
    const total = precoMesa + (numCriancas * taxaCrianca);
    precoTotal.innerText = "Total: R$ " + total;
  };

  if (mesa && criancas) {
    mesa.addEventListener("change", calcularPreco);
    criancas.addEventListener("input", calcularPreco);
  }

  /* EVENTO DE ENVIO COM AVISO */
  if (formReserva) {
    formReserva.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validação final de segurança para crianças
      if (parseInt(criancas.value) < 0) {
        alert("O número de crianças não pode ser negativo.");
        return;
      }

      // Janela de confirmação
      const confirmacao = confirm("Deseja confirmar sua reserva no Forno Imperiale?");
      
      if (confirmacao) {
        // Exibe o feedback visual na página
        mensagemSucesso.style.display = "block";
        
        // Limpa os campos após o sucesso
        formReserva.reset();
        calcularPreco(); // Reseta o contador de preço
      }
    });
  }
});
