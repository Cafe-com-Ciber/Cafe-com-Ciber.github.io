class MatrixHero {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            // Não é necessário JavaScript para o conteúdo estático principal ou para o layout — apenas o canvas Matrix Rain e a revelação ao rolar.
        });

        // REVEAL on scroll
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const reveals = document.querySelectorAll('.reveal');
        if (reduceMotion || !('IntersectionObserver' in window)) {
            reveals.forEach(el => el.classList.add('in'));
        } else {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        // pequeno escalonamento ao revelar grupos de elementos para um efeito mais orgânico, em vez de todos de uma vez
                        const delay = Math.min(i * 60, 240);
                        setTimeout(() => entry.target.classList.add('in'), delay);
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
            reveals.forEach(el => io.observe(el));
        }

        // MATRIX BINARY RAIN — 0s e 1s caindo, tingidos em tons de roxo/azul característicos da marca
        (function matrixRain() {
            const canvas = document.getElementById('particles');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const heroEl = document.querySelector('.hero');

            const FONT_SIZE = 16;
            const STEP = 50; // ms per frame — controls fall speed (lower = faster)
            let w, h, dpr, columns, drops, speeds, tints;
            let lastTime = 0;
            let rafId;

            // Brand-tinted palette for the binary characters.
            // Mostly soft lilac/white, with occasional bright leads.
            const PALETTE = [
                'rgba(198, 184, 255, ALPHA)',  // soft lilac
                'rgba(160, 140, 240, ALPHA)',  // lavender
                'rgba(120, 160, 255, ALPHA)',  // blue
                'rgba(220, 210, 255, ALPHA)',  // pale lilac
                'rgba(255, 255, 255, ALPHA)',  // white (bright lead)
            ];

            function resize() {
                dpr = Math.min(window.devicePixelRatio || 1, 2);
                w = heroEl.offsetWidth;
                h = heroEl.offsetHeight;
                canvas.width = w * dpr;
                canvas.height = h * dpr;
                canvas.style.width = w + 'px';
                canvas.style.height = h + 'px';
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

                columns = Math.ceil(w / FONT_SIZE);
                drops = new Array(columns);
                speeds = new Array(columns);
                tints = new Array(columns);
                for (let i = 0; i < columns; i++) {
                    drops[i] = Math.random() * -h / FONT_SIZE; // staggered start (above viewport)
                    speeds[i] = 0.5 + Math.random() * 1.2;     // 0.5x – 1.7x speed
                    tints[i] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
                }
            }

            function frame(time) {
                rafId = requestAnimationFrame(frame);
                if (time - lastTime < STEP) return;
                lastTime = time;

                // Translucent black wash creates the trailing fade behind glyphs
                ctx.fillStyle = 'rgba(8, 4, 26, 0.12)';
                ctx.fillRect(0, 0, w, h);

                ctx.font = '500 ' + FONT_SIZE + 'px "JetBrains Mono", ui-monospace, monospace';
                ctx.textBaseline = 'top';

                for (let i = 0; i < columns; i++) {
                    const x = i * FONT_SIZE;
                    const y = drops[i] * FONT_SIZE;
                    const char = Math.random() < 0.5 ? '0' : '1';

                    // Bright "head" glyph at the leading edge
                    if (drops[i] > 0 && Math.random() < 0.04) {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
                        ctx.shadowColor = 'rgba(180, 160, 255, 0.6)';
                        ctx.shadowBlur = 8;
                        ctx.fillText(char, x, y);
                        ctx.shadowBlur = 0;
                    } else {
                        // Body glyph — soft tinted
                        const alpha = 0.45 + Math.random() * 0.35;
                        ctx.fillStyle = tints[i].replace('ALPHA', alpha.toFixed(2));
                        ctx.fillText(char, x, y);
                    }

                    // Advance + reset
                    drops[i] += speeds[i];
                    if (y > h && Math.random() > 0.975) {
                        drops[i] = -2 - Math.random() * 8;
                        speeds[i] = 0.5 + Math.random() * 1.2;
                        tints[i] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
                    }
                }
            }

            resize();
            // initial clear (no fade ghost on first frame)
            ctx.fillStyle = '#08041a';
            ctx.fillRect(0, 0, w, h);

            if (reduceMotion) {
                // Render one static frame so the texture is present without animation
                ctx.font = '500 ' + FONT_SIZE + 'px "JetBrains Mono", ui-monospace, monospace';
                ctx.textBaseline = 'top';
                for (let i = 0; i < columns; i++) {
                    for (let j = 0; j < Math.ceil(h / FONT_SIZE); j++) {
                        if (Math.random() < 0.35) {
                            const alpha = 0.25 + Math.random() * 0.4;
                            ctx.fillStyle = tints[i].replace('ALPHA', alpha.toFixed(2));
                            ctx.fillText(Math.random() < 0.5 ? '0' : '1', i * FONT_SIZE, j * FONT_SIZE);
                        }
                    }
                }
            } else {
                rafId = requestAnimationFrame(frame);
            }

            let resizeT;
            window.addEventListener('resize', () => {
                clearTimeout(resizeT);
                resizeT = setTimeout(() => { resize(); }, 150);
            });
        })();
    }
}

export default MatrixHero;