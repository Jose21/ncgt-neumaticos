document.addEventListener('DOMContentLoaded', () => {

    /* ========================================
       AÑO AUTOMÁTICO
    ======================================== */

    document.querySelectorAll('#year').forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    /* ========================================
       MENÚ MÓVIL
    ======================================== */

    const menuButton = document.querySelector('.menu');
    const navigation = document.querySelector('.nav nav');

    if (!menuButton || !navigation) {
        return;
    }


    /* Abrir / cerrar menú */

    menuButton.addEventListener('click', () => {

        const isOpen = navigation.classList.toggle('open');

        menuButton.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );

    });


    /* Cerrar menú al seleccionar una opción */

    navigation.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            navigation.classList.remove('open');

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });


    /* Cerrar menú con tecla Escape */

    document.addEventListener('keydown', event => {

        if (event.key === 'Escape') {

            navigation.classList.remove('open');

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

        }

    });

});
