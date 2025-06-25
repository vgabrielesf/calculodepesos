// Inicializa o ícone do formato ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    const formato = document.getElementById('formato').value;
    document.getElementById('icone-formato').innerHTML = iconesFormatos[formato] || '';
});

// Função para calcular o peso
function calcularPeso() {
    const material = document.getElementById('material')?.value;
    const tipo = document.getElementById('formato')?.value;
    if (!material || !tipo) return;

    const densidade = parseFloat(document.getElementById('densidade').value);
    let peso = 0;

    // Barra redonda
    if (tipo === 'barra_redonda') {
        const diametro = parseFloat(document.getElementById('diametro')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        const quantidade = parseInt(document.getElementById('quantidade')?.value || 1);
        if (diametro && comprimento && densidade) {
            let volume = Math.PI * Math.pow(diametro/2, 2) * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
            peso = peso * quantidade;
        }
    }
    // Barra quadrada
    else if (tipo === 'barra_quadrada') {
        const lado = parseFloat(document.getElementById('lado')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        const quantidade = parseInt(document.getElementById('quantidade')?.value || 1);
        if (lado && comprimento && densidade) {
            let volume = Math.pow(lado, 2) * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
            peso = peso * quantidade;
        }
    }
    // Barra retangular ou barra chata
    else if (tipo === 'barra_retangular' || tipo === 'barra_chata') {
        const largura = parseFloat(document.getElementById('largura')?.value || 0);
        const altura = parseFloat(document.getElementById('altura')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        const quantidade = parseInt(document.getElementById('quantidade')?.value || 1);
        if (largura && altura && comprimento && densidade) {
            let volume = largura * altura * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
            peso = peso * quantidade;
        }
    }
    // Chapa
    else if (tipo === 'chapa') {
        const largura = parseFloat(document.getElementById('largura')?.value || 0);
        const espessura = parseFloat(document.getElementById('espessura')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        const quantidade = parseInt(document.getElementById('quantidade')?.value || 1);
        if (largura && espessura && comprimento && densidade) {
            let volume = largura * espessura * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
            peso = peso * quantidade;
        }
    }
    // Tubo redondo
    else if (tipo === 'tubo_redondo') {
        const diametro_ext = parseFloat(document.getElementById('diametro_ext')?.value || 0);
        const espessura = parseFloat(document.getElementById('espessura')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        const quantidade = parseInt(document.getElementById('quantidade')?.value || 1);
        if (diametro_ext && espessura && comprimento && densidade) {
            let diametro_int = diametro_ext - 2 * espessura;
            let area_ext = Math.PI * Math.pow(diametro_ext/2, 2);
            let area_int = Math.PI * Math.pow(diametro_int/2, 2);
            let area = area_ext - area_int;
            let volume = area * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
            peso = peso * quantidade;
        }
    }
    // Tubo quadrado
    else if (tipo === 'tubo_quadrado') {
        const lado_ext = parseFloat(document.getElementById('lado_ext')?.value || 0);
        const espessura = parseFloat(document.getElementById('espessura')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        const quantidade = parseInt(document.getElementById('quantidade')?.value || 1);
        if (lado_ext && espessura && comprimento && densidade) {
            let lado_int = lado_ext - 2 * espessura;
            let area_ext = Math.pow(lado_ext, 2);
            let area_int = Math.pow(lado_int, 2);
            let area = area_ext - area_int;
            let volume = area * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
            peso = peso * quantidade;
        }
    }
    // Tubo retangular
    else if (tipo === 'tubo_retangular') {
        const largura_ext = parseFloat(document.getElementById('largura_ext')?.value || 0);
        const altura_ext = parseFloat(document.getElementById('altura_ext')?.value || 0);
        const espessura = parseFloat(document.getElementById('espessura')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        const quantidade = parseInt(document.getElementById('quantidade')?.value || 1);
        if (largura_ext && altura_ext && espessura && comprimento && densidade) {
            let largura_int = largura_ext - 2 * espessura;
            let altura_int = altura_ext - 2 * espessura;
            let area_ext = largura_ext * altura_ext;
            let area_int = largura_int * altura_int;
            let area = area_ext - area_int;
            let volume = area * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
            peso = peso * quantidade;
        }
    }
    // Perfil T, U, L (usando altura e comprimento)
    else if (tipo === 'perfil_l') {
        const altura = parseFloat(document.getElementById('altura')?.value || 0);
        const largura = parseFloat(document.getElementById('largura')?.value || 0);
        const espessura = parseFloat(document.getElementById('espessura')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        if (altura && largura && espessura && comprimento && densidade) {
            let volume = (altura + largura - espessura) * espessura * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
        }
    }
    else if (tipo === 'perfil_u' || tipo === 'perfil_t') {
        const altura = parseFloat(document.getElementById('altura')?.value || 0);
        const largura = parseFloat(document.getElementById('largura')?.value || 0);
        const espessura = parseFloat(document.getElementById('espessura')?.value || 0);
        const comprimento = parseFloat(document.getElementById('comprimento')?.value || 0);
        if (altura && largura && espessura && comprimento && densidade) {
            let volume = (2 * altura * espessura + (largura - 2 * espessura) * espessura) * comprimento; // mm³
            volume = volume / 1000; // cm³
            peso = volume * densidade / 1000; // kg
        }
    }

    // Atualiza o campo de peso total
    const pesoInput = document.getElementById('peso');
    if (pesoInput) pesoInput.value = peso > 0 ? peso.toFixed(2) : '';
}

// Nomes dos formatos
const nomesFormatos = {
    barra_redonda: "Barra redonda",
    barra_quadrada: "Barra quadrada",
    barra_retangular: "Barra retangular",
    barra_chata: "Barra chata",
    chapa: "Chapa",
    tubo_redondo: "Tubo redondo",
    tubo_quadrado: "Tubo quadrado",
    tubo_retangular: "Tubo retangular",
    perfil_t: "Perfil T",
    perfil_u: "Perfil U",
    perfil_l: "Perfil L"
};

// Ícones dos formatos
const iconesFormatos = {
    barra_redonda: `<span class="formato-icone formato-circulo"></span>`,
    barra_quadrada: `<span class="formato-icone formato-quadrado"></span>`,
    barra_retangular: `<span class="formato-icone formato-barra-retangular"></span>`,
    barra_chata: `<span class="formato-icone formato-chata"></span>`,
    chapa: `<span class="formato-icone formato-icone-chapa"><img src="assets/img/chapa1.png" alt="Chapa" class="icone-chapa"></span>`,
    tubo_redondo: `<span class="formato-icone formato-tubo-circulo"></span>`,
    tubo_quadrado: `<span class="formato-icone formato-tubo-quadrado"></span>`,
    tubo_retangular: `<span class="formato-icone formato-tubo-retangular"></span>`,
    perfil_t: `<span class="formato-icone formato-icone-t"><img src="assets/img/perfil_t.png" alt="Perfil T" class="icone-perfil-t"></span>`,
    perfil_u: `<span class="formato-icone formato-icone-u"><img src="assets/img/perfil_u.png" alt="Perfil U" class="icone-perfil-u"></span>`,
    perfil_l: `<span class="formato-icone formato-icone-l"><img src="assets/img/perfil_l.png" alt="Perfil L" class="icone-perfil-l"></span>`
};

const camposPorFormato = {
    barra_redonda: `
        <div class="campo">
            <label for="diametro">Diâmetro</label>
            <div class="input-sufixo">
                <input type="number" id="diametro" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    barra_quadrada: `
        <div class="campo">
            <label for="lado">Lado</label>
            <div class="input-sufixo">
                <input type="number" id="lado" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    barra_retangular: `
        <div class="campo">
            <label for="largura">Largura</label>
            <div class="input-sufixo">
                <input type="number" id="largura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="altura" style="margin-top:12px;">Altura</label>
            <div class="input-sufixo">
                <input type="number" id="altura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    barra_chata: `
        <div class="campo">
            <label for="largura">Largura</label>
            <div class="input-sufixo">
                <input type="number" id="largura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="altura" style="margin-top:12px;">Altura</label>
            <div class="input-sufixo">
                <input type="number" id="altura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    chapa: `
        <div class="campo">
            <label for="largura">Largura</label>
            <div class="input-sufixo">
                <input type="number" id="largura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="espessura" style="margin-top:12px;">Espessura</label>
            <div class="input-sufixo">
                <input type="number" id="espessura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    tubo_redondo: `
        <div class="campo">
            <label for="diametro_ext">Diâmetro externo</label>
            <div class="input-sufixo">
                <input type="number" id="diametro_ext" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="espessura" style="margin-top:12px;">Espessura</label>
            <div class="input-sufixo">
                <input type="number" id="espessura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    tubo_quadrado: `
        <div class="campo">
            <label for="lado_ext">Lado externo</label>
            <div class="input-sufixo">
                <input type="number" id="lado_ext" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="espessura" style="margin-top:12px;">Espessura</label>
            <div class="input-sufixo">
                <input type="number" id="espessura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    tubo_retangular: `
        <div class="campo">
            <label for="largura_ext">Largura externa</label>
            <div class="input-sufixo">
                <input type="number" id="largura_ext" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="altura_ext" style="margin-top:12px;">Altura externa</label>
            <div class="input-sufixo">
                <input type="number" id="altura_ext" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="espessura" style="margin-top:12px;">Espessura</label>
            <div class="input-sufixo">
                <input type="number" id="espessura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    perfil_t: `
        <div class="campo">
            <label for="altura">Altura</label>
            <div class="input-sufixo">
                <input type="number" id="altura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="largura" style="margin-top:12px;">Largura</label>
            <div class="input-sufixo">
                <input type="number" id="largura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="espessura" style="margin-top:12px;">Espessura</label>
            <div class="input-sufixo">
                <input type="number" id="espessura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    perfil_u: `
        <div class="campo">
            <label for="altura">Altura</label>
            <div class="input-sufixo">
                <input type="number" id="altura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="largura" style="margin-top:12px;">Largura</label>
            <div class="input-sufixo">
                <input type="number" id="largura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="espessura" style="margin-top:12px;">Espessura</label>
            <div class="input-sufixo">
                <input type="number" id="espessura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `,
    perfil_l: `
        <div class="campo">
            <label for="altura">Altura</label>
            <div class="input-sufixo">
                <input type="number" id="altura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="largura" style="margin-top:12px;">Largura</label>
            <div class="input-sufixo">
                <input type="number" id="largura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="espessura" style="margin-top:12px;">Espessura</label>
            <div class="input-sufixo">
                <input type="number" id="espessura" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
            <label for="comprimento" style="margin-top:12px;">Comprimento</label>
            <div class="input-sufixo">
                <input type="number" id="comprimento" min="0.1" step="0.1" required>
                <span class="sufixo">mm</span>
            </div>
        </div>
    `
};

// Eventos para botões de formato
document.querySelectorAll('.formato-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.formato-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('formato').value = btn.getAttribute('data-formato');
        const formato = btn.getAttribute('data-formato');
        document.getElementById('campos-dinamicos').innerHTML = camposPorFormato[formato] || '';
        document.querySelector('.formulario-nome').textContent = nomesFormatos[formato] || '';
        document.getElementById('icone-formato').innerHTML = iconesFormatos[formato] || '';
        [
            'diametro','comprimento','quantidade','lado','largura','altura','espessura',
            'diametro_ext','lado_ext','largura_ext','altura_ext','area'
        ].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', calcularPeso);
        });
        calcularPeso();
    });
});

// Inicializa campos ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const formato = document.getElementById('formato').value;
    document.getElementById('campos-dinamicos').innerHTML = camposPorFormato[formato] || '';
    document.querySelector('.formulario-nome').textContent = nomesFormatos[formato] || '';
    document.getElementById('icone-formato').innerHTML = iconesFormatos[formato] || '';
    [
        'diametro','comprimento','quantidade','lado','largura','altura','espessura',
        'diametro_ext','lado_ext','largura_ext','altura_ext','area'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calcularPeso);
    });
    calcularPeso();
});

// Densidades padrão e atualização
const densidadesPadrao = {
    'aco_carbono': 7.85,
    'aco_inox': 7.90,
    'aluminio': 2.70,
    'cobre': 8.96,
    'latao': 8.50,
    'bronze': 8.80
};

function atualizarDensidade() {
    const material = document.getElementById('material').value;
    document.getElementById('densidade').value = densidadesPadrao[material] || '';
    calcularPeso();
}

document.getElementById('material').addEventListener('change', atualizarDensidade);
document.getElementById('densidade').addEventListener('input', calcularPeso);
window.addEventListener('DOMContentLoaded', atualizarDensidade);

// Tabela ABNT: destacar linha ao clicar
document.addEventListener('DOMContentLoaded', function () {
    const tabela = document.getElementById('tabela-abnt');
    if (!tabela) return;
    tabela.querySelectorAll('tbody tr').forEach(function (linha) {
        linha.addEventListener('click', function () {
            tabela.querySelectorAll('tbody tr').forEach(l => l.classList.remove('destacado'));
            linha.classList.add('destacado');
        });
    });
});

// Conversão polegada <-> mm
function parsePolegadaFracionada(str) {
    str = (str || '').trim().replace(',', '.');
    if (!str) return NaN;
    let partes = str.split(' ');
    let total = 0;
    if (partes.length === 2) {
        let inteiro = parseFloat(partes[0]);
        let frac = partes[1];
        let fracParts = frac.split('/');
        if (fracParts.length === 2) {
            let numerador = parseFloat(fracParts[0]);
            let denominador = parseFloat(fracParts[1]);
            if (!isNaN(inteiro) && !isNaN(numerador) && !isNaN(denominador) && denominador !== 0) {
                total = inteiro + (numerador / denominador);
            }
        }
    } else if (str.includes('/')) {
        let fracParts = str.split('/');
        if (fracParts.length === 2) {
            let numerador = parseFloat(fracParts[0]);
            let denominador = parseFloat(fracParts[1]);
            if (!isNaN(numerador) && !isNaN(denominador) && denominador !== 0) {
                total = numerador / denominador;
            }
        }
    } else {
        let val = parseFloat(str);
        if (!isNaN(val)) total = val;
    }
    return total;
}

function converterValor() {
    const valorStr = document.getElementById('valor-converter').value;
    let valor = parsePolegadaFracionada(valorStr);
    let resultado = '';
    if (!isNaN(valor) && valor > 0) {
        resultado = (valor * 25.4).toFixed(2) + ' mm';
    } else {
        resultado = '';
    }
    document.getElementById('resultado-conversao').value = resultado;
}

// Tabela conversão: destacar célula pol e mm ao clicar
document.addEventListener('DOMContentLoaded', function () {
    const tabela = document.getElementById('tabela-conversao');
    if (!tabela) return;
    tabela.querySelectorAll('tbody tr').forEach(function (linha) {
        if (linha.querySelector('input')) return;
        linha.querySelectorAll('.pol').forEach(function (celPol) {
            celPol.addEventListener('click', function () {
                tabela.querySelectorAll('.pol, .mm').forEach(cel => cel.classList.remove('destacado'));
                celPol.classList.add('destacado');
                const celMM = celPol.nextElementSibling;
                if (celMM && celMM.classList.contains('mm')) {
                    celMM.classList.add('destacado');
                }
            });
        });
    });
});
