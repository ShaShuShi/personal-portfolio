function expandProject(card) {
    const expandedClass = 'expanded';
    const alreadyExpanded = card.classList.contains(expandedClass);

    // Close all expanded cards before expanding another
    document.querySelectorAll('.project-card.expanded').forEach(expandedCard => {
        expandedCard.classList.remove(expandedClass);
    });

    // Toggle expansion
    if (!alreadyExpanded) {
        card.classList.add(expandedClass);
    }
}
