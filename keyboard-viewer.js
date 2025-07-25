class KeyboardViewer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.kmnLayers = { base: {}, shift: {}, altgr: {}, shiftAltgr: {} };
    this.currentLayer = 'base';
  }

  async connectedCallback() {
    const style = await fetch('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap').then(r => r.text());
    const layoutText = await fetch('layout.kmn').then(r => r.text()).catch(() => '');

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      <style>${this.getStyles()}</style>
      <div class="container">
        <div id="layers">
          <button data-layer="base" class="active">Base</button>
          <button data-layer="shift">Shift</button>
          <button data-layer="altgr">AltGr</button>
          <button data-layer="shiftAltgr">Shift+AltGr</button>
        </div>
        <div class="keyboard" id="keyboard"></div>
      </div>
      <div id="zoomPreview">
        <button id="zoomClose">&times;</button>
        <div id="zoomChar"></div>
        <div id="zoomCode"></div>
      </div>
    `;

    this.parseKMN(layoutText);
    this.renderKeyboard();
    this.attachListeners();
  }

  getStyles() {
    return `
    :host {
      --key-bg: #ffffff;
      --key-border: #cccccc;
      --key-active-bg: #e0e0e0;
      --key-text: #333333;
      --key-secondary-text: #777777;
      --key-shadow: rgba(0, 0, 0, 0.1);
      --layer-active-bg: #4a6fa5;
      --layer-active-text: #ffffff;
      --header-bg: #4a6fa5;
      --header-text: #ffffff;
    }

    .container {
      text-align: center;
      max-width: 1000px;
      margin: 0 auto;
      padding: 1rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      padding: 0.8rem;
      background: var(--header-bg);
      color: var(--header-text);
      border-radius: 8px;
      box-shadow: 0 2px 4px var(--key-shadow);
    }

    .keyboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
  background: #e9e9e9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px var(--key-shadow);
  user-select: none;
}


    .row {
      display: flex;
      justify-content: center;
      margin: 16px 0;
    }

    .key-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 3px;
      user-select: none;
      pointer-events: none;
    }

    .eng-outside {
      font-size: 13px;
      color: var(--key-secondary-text);
      font-weight: 600;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    .key {
      border: 1px solid var(--key-border);
      background: var(--key-bg);
      border-radius: 8px;
      height: 60px;
      min-width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 3px var(--key-shadow);
      transition: all 0.1s ease;
      position: relative;
      box-sizing: border-box;
      pointer-events: auto;
      user-select: none;
      cursor: default;
    }

    .key:active, .key.active {
      background: #ABFFBB !important;
      color: white !important;
      transform: translateY(1px);
      box-shadow: 0 1px 2px rgba(0,0,0,0.2);
      border: 1px solid #ABFFBB;
    }

    .key.wide { min-width: 70px; }
    .key.xwide { min-width: 110px; }
    .key.xxwide { min-width: 250px; }

    .urdu {
      font-size: 22px;
      font-weight: bold;
      font-family: "Noto Nastaliq Urdu", serif;
      color: var(--key-text);
    }

    .urdu.diacritic { font-size: 28px !important; }
    .urdu.large { font-size: 32px !important; }
    .urdu.extra-large { font-size: 36px !important; }

    #layers {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 1rem 0;
      gap: 8px;
    }

    #layers button {
      padding: 8px 16px;
      font-size: 0.95rem;
      border: none;
      border-radius: 6px;
      background: var(--key-bg);
      color: var(--key-text);
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 3px var(--key-shadow);
    }

    #layers button:hover {
      background: #e0e0e0;
    }

    #layers button.active {
      background: var(--layer-active-bg);
      color: var(--layer-active-text);
    }

    #zoomPreview {
      position: absolute;
      z-index: 1000;
      background: white;
      border: 2px solid #4a6fa5;
      border-radius: 10px;
      padding: 12px 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      font-family: "Noto Nastaliq Urdu", serif;
      pointer-events: auto;
      transition: opacity 0.1s ease;
      opacity: 0;
    }

    #zoomChar {
      font-size: 48px;
      color: #111;
      text-align: center;
    }

    #zoomCode {
      font-size: 14px;
      color: #666;
      margin-top: 4px;
      text-align: center;
    }

    #zoomClose {
      position: absolute;
      top: 4px;
      right: 8px;
      border: none;
      background: transparent;
      font-size: 20px;
      color: #666;
      cursor: pointer;
      font-weight: bold;
    }

    #zoomClose:hover {
      color: #000;
    }

    @media (max-width: 768px) {
      .key { height: 50px; min-width: 30px; padding: 4px; }
      .eng-outside { font-size: 11px; }
      .urdu { font-size: 18px; }
      .urdu.diacritic { font-size: 24px !important; }
      .urdu.large { font-size: 28px !important; }
      .urdu.extra-large { font-size: 30px !important; }
      .key.xwide { min-width: 80px; }
      .key.xxwide { min-width: 180px; }
    }
    `;
  }

  attachListeners() {
    const layerButtons = this.shadowRoot.querySelectorAll('#layers button');
    layerButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentLayer = btn.dataset.layer;
        layerButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderKeyboard();
      });
    });

    this.shadowRoot.getElementById('zoomClose').addEventListener('click', () => {
      const zoomBox = this.shadowRoot.getElementById('zoomPreview');
      zoomBox.style.opacity = 0;
      setTimeout(() => (zoomBox.style.display = 'none'), 200);
    });
  }

  parseKMN(text) {
    this.kmnLayers = { base: {}, shift: {}, altgr: {}, shiftAltgr: {} };
    const lines = text.split(/\r?\n/);
    for (const line of lines) {
      if (!line.includes('>') || line.trim().startsWith('//')) continue;
      const keyMatch = line.match(/\+ *\[(.*?)\]/);
      const outMatch = line.match(/> *(U\+[0-9A-F]+)/i);
      if (!keyMatch || !outMatch) continue;
      const mods = keyMatch[1].split(' ');
      const keyCode = mods.find(m => m.startsWith('K_'));
      const shift = mods.includes('SHIFT');
      const ctrl = mods.includes('CTRL') || mods.includes('RALT');
      let layer = 'base';
      if (shift && ctrl) layer = 'shiftAltgr';
      else if (shift) layer = 'shift';
      else if (ctrl) layer = 'altgr';
      const codePoint = parseInt(outMatch[1].replace('U+', ''), 16);
      const urduChar = String.fromCodePoint(codePoint);
      if (keyCode) this.kmnLayers[layer][keyCode] = urduChar;
    }
  }

  renderKeyboard() {
    const keyboard = this.shadowRoot.getElementById('keyboard');
    keyboard.innerHTML = '';
    const rows = [
      ['K_BKQUOTE','K_1','K_2','K_3','K_4','K_5','K_6','K_7','K_8','K_9','K_0','K_HYPHEN','K_EQUAL','K_BKSP'],
      ['K_TAB','K_Q','K_W','K_E','K_R','K_T','K_Y','K_U','K_I','K_O','K_P','K_LBRKT','K_RBRKT','K_BKSLASH'],
      ['K_CAPS','K_A','K_S','K_D','K_F','K_G','K_H','K_J','K_K','K_L','K_COLON','K_QUOTE','K_ENTER'],
      ['K_LSHIFT','K_Z','K_X','K_C','K_V','K_B','K_N','K_M','K_COMMA','K_PERIOD','K_SLASH','K_RSHIFT'],
      ['K_CTRL','K_LALT','K_SPACE','K_RALT','K_CTRL']
    ];
    const skipOutside = ['K_CTRL','K_ALT','K_SHIFT','K_CAPS','K_ENTER','K_TAB','K_BKSP','K_SPACE','K_LALT','K_RALT','K_LSHIFT','K_RSHIFT'];
    const labels = {
      K_BKSP:'⌫',K_TAB:'↹',K_CAPS:'⇪',K_ENTER:'↵',K_LSHIFT:'⇧',K_RSHIFT:'⇧',K_CTRL:'Ctrl',K_LALT:'Alt',K_RALT:'AltGr',K_SPACE:'␣',K_BKQUOTE:'`',K_HYPHEN:'-',K_EQUAL:'=',K_LBRKT:'[',K_RBRKT:']',K_BKSLASH:'\\',K_COLON:';',K_QUOTE:"'",K_COMMA:',',K_PERIOD:'.',K_SLASH:'/'
    };
    const wide = {
      K_TAB: 'wide', K_CAPS: 'wide', K_SHIFT: 'xwide', K_ENTER: 'xwide', K_BKSP: 'xwide', K_SPACE: 'xxwide'
    };

    for (const row of rows) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'row';
      for (const key of row) {
        const wrapper = document.createElement('div');
        wrapper.className = 'key-wrapper';

        const urduChar = this.kmnLayers[this.currentLayer][key] || '';
        let urduClass = 'urdu';
        if (/[ّْٕٓٔ]/.test(urduChar)) urduClass += ' extra-large';
        else if (/[ٰۖ-ۥ]/.test(urduChar)) urduClass += ' large';
        else if (/[ً-ٰٟۖ-ۭؐ-ؚ]/.test(urduChar)) urduClass += ' diacritic';

        const engLabel = labels[key] || key.replace('K_', '');

        if (!skipOutside.includes(key)) {
          const eng = document.createElement('div');
          eng.className = 'eng-outside';
          eng.textContent = engLabel;
          wrapper.appendChild(eng);
        }

        const keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        if (wide[key]) keyDiv.classList.add(wide[key]);
        const inner = document.createElement('div');
        inner.className = skipOutside.includes(key) ? 'urdu' : urduClass;
        inner.textContent = skipOutside.includes(key) ? engLabel : urduChar;
        keyDiv.appendChild(inner);
        wrapper.appendChild(keyDiv);
        rowDiv.appendChild(wrapper);

        if ((this.currentLayer === 'shift' && key === 'K_RSHIFT') ||
            (this.currentLayer === 'altgr' && key === 'K_RALT') ||
            (this.currentLayer === 'shiftAltgr' && (key === 'K_RSHIFT' || key === 'K_RALT'))) {
          keyDiv.classList.add('active');
        }

        if (!skipOutside.includes(key) && urduChar) {
          keyDiv.addEventListener('click', e => this.showZoom(e, urduChar));
          keyDiv.addEventListener('touchstart', e => {
            if (e.touches?.length > 0) this.showZoom(e.touches[0], urduChar);
          }, { passive: true });
        }
      }
      keyboard.appendChild(rowDiv);
    }
  }

  showZoom(event, char) {
    const zoomBox = this.shadowRoot.getElementById('zoomPreview');
    const zoomChar = this.shadowRoot.getElementById('zoomChar');
    const zoomCode = this.shadowRoot.getElementById('zoomCode');
    zoomChar.textContent = char;
    zoomCode.textContent = `Unicode: U+${char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`;
    zoomBox.style.left = `${event.pageX + 20}px`;
    zoomBox.style.top = `${event.pageY - 20}px`;
    zoomBox.style.display = 'block';
    zoomBox.style.opacity = 1;
  }
}

customElements.define('keyboard-viewer', KeyboardViewer);
