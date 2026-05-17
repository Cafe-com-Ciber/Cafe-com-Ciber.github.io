class MenuToggle {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => this.init());
    }

    init() {
        const nav = document.getElementById('nav');
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.getElementById('navToggle');
        const hero = document.querySelector('.hero');

        if (!navToggle || !navLinks || !nav) {
            console.warn("Elementos do menu mobile não encontrados");
            return;
        }

        const onScroll = () => {
            const y = window.scrollY;
            nav.classList.toggle('scrolled', y > 12);
            if (hero) {
                const heroBottom = hero.offsetTop + hero.offsetHeight - 80;
                nav.classList.toggle('is-hero', y < heroBottom);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        navToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(open));
            navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        });

        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

export default MenuToggle;
