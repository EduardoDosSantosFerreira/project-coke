// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <section>
    <div class="circle"></div>
    <header>
        <a href="#">
            <img src="img/logo.png" alt="Logo CocaCola">
        </a>
        <div class="toggle" onclick="toggleMenu()"></div>
        <ul class="navigation">
            <li><a href="index.html">Home</a></li>
            <li><a href="http://">Menu</a></li>
            <li><a href="http://">What's New</a></li>
            <li><a href="http://">Contact</a></li>
        </ul>
    </header>
    <div class="content">
        <div class="textBox">
            <h4 id="xxx">I LIKE</h4>
            <h2>Taste the Feeling</h2>
            <p>Coca-Cola é uma bebida carbonatada, contendo água carbonatada, açúcar (geralmente na forma de xarope
                de milho de alta frutose), corantes, aromatizantes naturais e cafeína. Um sabor único!</p>
            <a href="https://www.coca-cola.com.br">Learn More</a>
        </div>
        <div class="imgBox">
            <!-- Swiper -->
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="img/cocacola1.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="img/cocacola2.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="img/cocacola3.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="img/cocacola4.png" />
                    </div>
                    <div class="swiper-slide">
                        <img style="max-width: 325px; max-height: 345px" src="img/cocacola6.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="img/cocacola5.png" />
                    </div>
                </div>
            </div>
        </div>

    </div>
    <ul class="sci">
        <li><a href="https://www.facebook.com/cocacolabr/?brand_redir=40796308305"><img src="img/facebook.png"
                    alt="Facebook CocaCola"></a></li>
        <li><a href="https://www.instagram.com/cocacola_br/"><img src="img/instagram.png"
                    alt="Instagram CocaCola"></a></li>
        <li><a href="https://twitter.com/CocaCola_Br"><img src="img/twitter.png" alt="Twitter CocaCola"></a></li>
    </ul>
</section>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000, // Tempo de atraso entre os slides em milissegundos
        disableOnInteraction: false, // Permitir que a reprodução automática continue mesmo quando o usuário interagir com o slide
    },
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}