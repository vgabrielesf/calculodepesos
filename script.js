<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Vitória Gabriele | Portfólio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Fonte Poppins Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --gradient: linear-gradient(90deg, #7f53ac 0%, #647dee 100%);
            --primary: #18122B;
            --secondary: #7f53ac;
            --accent: #647dee;
            --text: #f3f3f3;
            --muted: #b5b5c3;
            --bg-card: #231942;
            --shadow: 0 4px 32px #7f53ac33;
        }
        body {
            margin: 0;
            font-family: 'Poppins', Arial, sans-serif;
            background: var(--primary);
            color: var(--text);
            min-height: 100vh;
            box-sizing: border-box;
            text-align: justify;
        }
        header {
            width: 100vw;
            position: fixed;
            top: 0;
            left: 0;
            background: var(--primary);
            z-index: 1000;
            border-bottom: 1px solid #2d225a;
            height: 64px;
            display: flex;
            align-items: center;
            box-shadow: 0 2px 12px #7f53ac11;
        }
        nav {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 2.5rem;
            height: 64px;
            padding: 0 2vw;
        }
        nav a {
            color: var(--text);
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            letter-spacing: 1px;
            padding: 8px 18px;
            border-radius: 6px;
            transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        nav a:hover, nav a.active {
            background: var(--gradient);
            color: #fff;
            box-shadow: 0 2px 12px #7f53ac33;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2vw;
            padding-top: 96px;
            box-sizing: border-box;
        }
        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start; /* Alinha à esquerda */
            min-height: 80vh;
            text-align: left;        /* Texto à esquerda */
            animation: fadeIn 1.2s;
        }
        .hero-title {
            font-size: 2.5rem;
            font-weight: 700;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.2rem;
            letter-spacing: 2px;
            animation: slideDown 1s;
        }
        .hero-sub {
            font-size: 1.5rem;
            color: var(--muted);
            font-weight: 600;
            margin-bottom: 1.5rem;
            animation: fadeIn 2s;
        }
        .hero-desc {
            max-width: 600px;
            color: var(--text);
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            line-height: 1.6;
            animation: fadeIn 2.5s;
            text-align: left;        /* Garante alinhamento à esquerda */
            align-self: flex-start; /* Alinha à esquerda */
            margin-left: 0;
            
        }
        .hero .btn {
            display: inline-block;
            padding: 14px 38px;
            background: var(--gradient);
            color: #fff;
            border: none;
            border-radius: 6px;
            font-size: 1.1rem;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 2px 16px #7f53ac44;
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
        }
        .hero .btn:hover {
            transform: translateY(-3px) scale(1.04);
            box-shadow: 0 6px 32px #7f53ac66;
        }
        section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            scroll-snap-align: start;
            padding-top: 0;
            padding-bottom: 0;
        }
        main {
            scroll-snap-type: y mandatory;
        }
        .section-title {
            color: var(--secondary);
            font-size: 2rem;
            margin-bottom: 32px;
            font-weight: 700;
            letter-spacing: 1px;
            text-align: center;
        }
        .about {
            max-width: 700px;
            margin: 0 auto;
            background: var(--bg-card);
            border-radius: 12px;
            padding: 2rem 2.5rem;
            box-shadow: var(--shadow);
            color: var(--text);
            font-size: 1.1rem;
            line-height: 1.7;
            animation: fadeIn 1.5s;
            text-align: justify;
        }
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            align-items: start; /* Adicione esta linha */
        }
        .project-card {
            background: var(--bg-card);
            border-radius: 12px;
            padding: 2rem 1.5rem;
            box-shadow: var(--shadow);
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            border: 1.5px solid #2d225a;
            transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
            position: relative;
            overflow: hidden;
            text-align: justify;
        }
        .project-card::before {
            content: "";
            position: absolute;
            top: -60px; left: -60px;
            width: 120px; height: 120px;
            background: var(--gradient);
            opacity: 0.07;
            border-radius: 50%;
            z-index: 0;
        }
        .project-card h4 {
            margin: 0;
            color: #fff;
            font-size: 1.3rem;
            font-weight: 700;
            z-index: 1;
            position: relative;
        }
        .project-card p {
            color: var(--muted);
            font-size: 1rem;
            z-index: 1;
            position: relative;
            text-align: justify;
        }
        .project-card a {
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            margin-top: 8px;
            z-index: 1;
            position: relative;
            transition: color 0.2s;
        }
        .project-card a:hover {
            color: var(--accent);
            text-decoration: underline;
        }
        .project-card:hover {
            box-shadow: 0 8px 40px #7f53ac77;
            border: 1.5px solid var(--secondary);
            transform: translateY(-4px) scale(1.02);
        }
        .contact-card {
            max-width: 500px;
            margin: 0 auto;
            background: var(--bg-card);
            border-radius: 12px;
            padding: 2rem 2.5rem;
            box-shadow: var(--shadow);
            color: var(--text);
            font-size: 1.1rem;
            text-align: center;
            animation: fadeIn 1.5s;
        }
        .contact-card a {
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s;
        }
        .contact-card a:hover {
            color: var(--accent);
            text-decoration: underline;
            text-align: justify;
        }
        footer {
            text-align: center;
            color: var(--muted);
            padding: 40px 0 20px 0;
            font-size: 1em;
            background: transparent;
        }
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: none;}
        }
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: none;}
        }
        /* Efeito cursor digitando */
        .typewriter {
          display: inline-block;
          border-right: 2px solid #7f53ac;
          white-space: nowrap;
          overflow: hidden;
          animation: blink-cursor 0.7s steps(1) infinite;
        }

        @keyframes blink-cursor {
          0%, 100% { border-color: #7f53ac; }
          50% { border-color: transparent; }
        }
        /* Responsivo */
        @media (max-width: 900px) {
            .container { max-width: 98vw; padding: 0 4vw; }
            .section-title { font-size: 1.3rem; }
        }
        @media (max-width: 600px) {
            nav { gap: 1em; font-size: 0.95em; }
            .container { padding: 0 2vw; }
            .hero { min-height: 60vh; padding-top: 2em; padding-bottom: 2em; }
            .section-title { font-size: 1.1em; }
            .about, .contact-card { padding: 1.2rem 1rem; }
        }
        .logo-gradient {
          position: fixed;  
          top: 60%;
          width: 400px; /* ajuste o tamanho conforme desejar */
          height: 400px;
          background: linear-gradient(90deg, #7f53ac 0%, #647dee 100%);
          -webkit-mask-image: url('logo.png'); /* coloque o nome correto do seu arquivo */
          mask-image: url('logo.png');
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-position: center;
          mask-position: center;
          display: block;
          margin-left: 24px; /* espaço entre o nome e a logo */
        }

    </style>
</head>
<body>
    <header>
                <nav>
            <a href="#sobre">Sobre</a>
            <a href="#formacao">Formação</a>
            <a href="#certificados">Certificados</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>
    <main class="container">
        <section class="hero" style="position: relative;">
          <div style="display: flex; align-items: center; width: 100%;">
            <div class="hero-title" style="flex:1;">
              <span id="typewriter"></span>
            </div>
          </div>
          <div class="hero-sub">Desenvolvedora Front-End</div>
          <a class="btn" href="#projetos">Veja meus projetos</a>
          <div class="logo-gradient" style="position: absolute; top: 0; right: 0;"></div>
        </section>

        <section id="sobre">
            <div style="max-width: 800px; margin: 0 0 0 auto; text-align: left;">
                <div style="font-size: 2rem; font-weight: 600; margin-bottom: 18px;">Sobre mim</div>
                <div style="font-weight: 700; margin-bottom: 10px;">Fortaleza, Ceará</div>
                <div style="font-size: 1.08rem; color: var(--text); margin-bottom: 28px; text-align: justify;">
                    Sou Desenhista com nível técnico em Eletromecânica, atualmente atuo na criação de desenhos técnicos e modelos 3D para diversos projetos industriais. Ao longo da minha trajetória, desenvolvi habilidades com softwares CAD como AutoCAD, FreeCAD, Inventor e Rhinoceros, além de utilizar o Keyshot para renderizações realistas e apresentações profissionais de produtos. Em 2023 iniciei o curso de Análise e Desenvolvimento de Sistemas e atualmente me encontro entusiasmada em unir minha base sólida em design mecânico com a tecnologia e programação, buscando soluções inovadoras e funcionais para os desafios da engenharia moderna. Como também atuar integralmente como desenvolvedora.
                </div>
                <div style="display: flex; gap: 32px;">
                    <a href="curriculo.pdf" target="_blank" style="display: flex; align-items: center; gap: 8px; border: 2px solid #00ff99; border-radius: 8px; padding: 10px 24px; color: #fff; font-weight: 600; text-decoration: none; font-size: 1.08rem; transition: background 0.2s, color 0.2s;">
                        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="Currículo" width="22" style="vertical-align:middle;">
                        Currículo
                    </a>
                    <a href="mailto:vitoria@email.com" style="display: flex; align-items: center; gap: 8px; border: 2px solid #00ff99; border-radius: 8px; padding: 10px 24px; color: #fff; font-weight: 600; text-decoration: none; font-size: 1.08rem; transition: background 0.2s, color 0.2s;">
                        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2709.png" alt="E-mail" width="22" style="vertical-align:middle;">
                        E-mail
                    </a>
                </div>
            </div>
        </section>
    
        <section id="formacao">
            <div style="max-width: 1200px; margin: 0 auto; width: 100%; text-align: left;">
                <div style="font-size: 2rem; font-weight: 600; color: #e0e0e0; margin-bottom: 32px;">
                    FORMAÇÃO ACADÊMICA
                </div>
                <div style="display: flex; gap: 32px;">
                    <!-- Abas à esquerda -->
                    <div style="display: flex; flex-direction: column; gap: 8px; min-width: 120px;">
                        <button style="padding: 10px 18px; border: none; border-radius: 6px; background: var(--secondary); color: #fff; font-weight: 600; cursor: pointer;">Técnico</button>
                        <button style="padding: 10px 18px; border: none; border-radius: 6px; background: #2d225a; color: #b5b5c3; font-weight: 600; cursor: pointer;">Superior</button>
                        <button style="padding: 10px 18px; border: none; border-radius: 6px; background: #2d225a; color: #b5b5c3; font-weight: 600; cursor: pointer;">Cursos</button>
                    </div>
                    <!-- Conteúdo da aba selecionada -->
                    <div style="flex:1;">
                        <div style="font-size: 1.3rem; font-weight: 700; color: #e0e0e0; margin-bottom: 10px;">
                            Técnico em Eletromecânica
                        </div>
                        <div style="color: #00ff99; font-weight: 600; margin-bottom: 18px;">
                            EEEP Raimundo Célio Rodrigues 2017 - 2019
                        </div>
                        <div style="color: #e0e0e0; font-size: 1.08rem; text-align: justify;">
                            Foi desenvolvido habilidades para integrar sistemas elétricos e mecânicos, atuando na instalação, manutenção e operação de máquinas e equipamentos industriais. Ao longo do curso, foi aprofundado conhecimentos em elétrica, mecânica, eletrônica e automação, me preparando para enfrentar os desafios da indústria moderna com inovação e eficiência.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="certificados">
            <div class="section-title">Certificados</div>
            <div class="certificados-list">
                <div class="certificado-item">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="PDF" class="certificado-img">
                    <span><b>React: Desenvolvendo com JavaScript</b> – Alura</span>
                </div>
                <div class="certificado-item">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="PDF" class="certificado-img">
                    <span><b>JavaScript: Programando na linguagem da web</b> – Alura</span>
                </div>
                <div class="certificado-item">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="PDF" class="certificado-img">
                    <span><b>HTML e CSS: Ambientes de desenvolvimento, estrutura de arquivos e tags</b> – Alura</span>
                </div>
                <div class="certificado-item">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="PDF" class="certificado-img">
                    <span><b>HTML e CSS: Classes, posicionamento e Flexbox</b> – Alura</span>
                </div>
                <div class="certificado-item">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="PDF" class="certificado-img">
                    <span><b>HTML e CSS: Cabeçalho, footer e variáveis CSS</b> – Alura</span>
                </div>
                <div class="certificado-item">
                    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="PDF" class="certificado-img">
                    <span><b>HTML e CSS: Trabalhando com responsividade e publicação de projetos</b> – Alura</span>
                </div>
                <!-- Adicione mais certificados conforme desejar -->
            </div>
        </section>

        <section id="projetos">
            <div class="section-title">Projetos em destaque</div>
            <div class="projects">
                <div class="project-card">
                    <h4>V-Nest</h4>
                    <p>
                        V-Nest é um aplicativo desktop desenvolvido em Python, com interface gráfica moderna baseada em PyQt5, voltado para a otimização do corte de chapas metálicas por meio de nesting.<br>
                        O projeto está em desenvolvimento e possui algumas limitações.
                    </p>
                    <div style="margin-top:16px; display: flex; flex-direction: column; align-items: center;">
                        <div style="width:100%; max-width:600px; background: #231942; border-radius: 10px; box-shadow: 0 2px 16px #7f53ac44; overflow: hidden;">
                            <iframe 
                                src="1749939771820.pdf#page=1&view=FitH" 
                                width="100%" 
                                height="700px" 
                                style="border:none; background:#fff; display:block;">
                            </iframe>
                        </div>
                        <a href="1749939771820.pdf" target="_blank" style="display:inline-flex;align-items:center;gap:8px;font-weight:600;color:var(--secondary);text-decoration:none;margin-top:12px;">
                            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="PDF" width="22" height="22">
                            Abrir PDF completo em nova aba
                        </a>
                    </div>
                </div>
            
                <div class="project-card">
                    <h4>Cálculo de Pesos</h4>
                    <p>
                        Aplicação web para cálculo de peso de materiais metálicos em diferentes formatos.
                        Interface intuitiva, responsiva e fácil de usar.
                        Tecnologias: HTML, CSS, JavaScript.
                    </p>
                    <div style="margin: 16px auto 0 auto; display: flex; flex-direction: column; align-items: center;">
                        <img src="assets/img/calc_pesos.png" alt="Tela inicial do Cálculo de Pesos" style="width:100%; max-width:500px; border-radius:10px; box-shadow:0 2px 16px #7f53ac44; background:#fff;">
                    </div>
                    <a href="https://vitoriagsilvaf.github.io/calculodepesos/" target="_blank" style="display:inline-flex;align-items:center;gap:8px;font-weight:600;color:var(--secondary);text-decoration:none; margin-top:12px;">
                        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4af.png" alt="Site" width="22" height="22">
                        Acessar projeto online
                    </a>
                </div>
        </section>

        <section id="contato">
            <div class="section-title">Contato</div>
            <div class="contact-card">
                Vamos conversar? <br>
                <a href="mailto:vitoria@email.com">vitoria@email.com</a><br>
                ou me chame no <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>.
                <br>
                <a href="https://github.com/vitoriagsilvaf" target="_blank" style="display:inline-flex;align-items:center;gap:6px;margin-top:10px;color:#fff;font-weight:600;text-decoration:none;">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="22" height="22" style="vertical-align:middle;">
                    GitHub/vitoriagsilvaf
                </a>
            </div>
        </section>
    </main>
    <footer>
        © 2025 Vitória Gabriele. Portfólio profissional.
    </footer>
    <script>
const text = "Vitória Gabriele";
const speed = 90; // ms por letra
let i = 0;
function typeWriter() {
  if (i <= text.length) {
    document.getElementById("typewriter").innerHTML = text.substring(0, i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("typewriter").classList.add("typewriter");
  typeWriter();
});
</script>
</body>
</html>
