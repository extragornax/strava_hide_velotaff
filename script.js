// The words you want to search for
const searchWords = ["velotaff", "velotaf", "commute"];

// Function to normalize strings (remove accents and convert to lowercase)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Normalize the search words
const normalizedSearchWords = searchWords.map(normalizeString);

// Select all elements with the data-testid attribute set to "activity_name"
const elements = document.querySelectorAll('[data-testid="activity_name"]');

// Loop through the selected elements
elements.forEach(element => {
    // Normalize the element's text content
    const normalizedText = normalizeString(element.textContent);
    
    // Check if the normalized text contains any of the search words
    if (normalizedSearchWords.some(word => normalizedText.includes(word))) {
        // Go up 8 levels
        let ancestor = element;
        for (let i = 0; i < 8; i++) {
            if (ancestor.parentElement) {
                ancestor = ancestor.parentElement;
            } else {
                break; // Stop if there are fewer than 8 levels
            }
        }
        // Add the "hidden" class to the ancestor
        ancestor.classList.add("hidden");
    }
});
