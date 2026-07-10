/**
 * Liquid Glass dynamic light refraction specularity handler
 */
document.addEventListener('DOMContentLoaded', () => {
    function updateSpecularCoordinates(e) {
        const panels = document.querySelectorAll('.liquid-glass');
        panels.forEach(panel => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            panel.style.setProperty('--x', `${x}px`);
            panel.style.setProperty('--y', `${y}px`);
        });
    }

    document.addEventListener('mousemove', updateSpecularCoordinates);
});
