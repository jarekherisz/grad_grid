import GradGrid from './GradGrid';

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[data-toggle="grad-grid"]').forEach(function(el) {
        new GradGrid(el, el.dataset);
    });
});
