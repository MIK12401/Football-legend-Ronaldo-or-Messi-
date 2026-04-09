function getPlayerId() {
    return document.body.dataset.player || 'default';
}

function addOpinion() {
    const opinionInput = document.getElementById('opinionInput');
    const opinion = opinionInput.value.trim();
    const playerId = getPlayerId();

    if (opinion === '') {
        alert('Please write an opinion!');
        return;
    }

    const storageKey = `${playerId}Opinions`;
    let opinions = JSON.parse(localStorage.getItem(storageKey) || '[]');

    opinions.push({
        text: opinion,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(storageKey, JSON.stringify(opinions));
    opinionInput.value = '';
    displayOpinions();
}

function displayOpinions() {
    const opinionsDisplay = document.getElementById('opinionsDisplay');
    if (!opinionsDisplay) return;

    const playerId = getPlayerId();
    const storageKey = `${playerId}Opinions`;
    const opinions = JSON.parse(localStorage.getItem(storageKey) || '[]');

    if (opinions.length === 0) {
        opinionsDisplay.innerHTML = '<p style="color: #999; font-style: italic;">No opinions yet. Be the first to share!</p>';
        return;
    }

    opinionsDisplay.innerHTML = '<h3 style="color: #333; margin-bottom: 15px;">Opinions from Fans:</h3>';
    opinions.reverse().forEach((op) => {
        opinionsDisplay.innerHTML += `
            <div class="opinion-item">
                <p class="opinion-text">💬 ${op.text}</p>
                <p class="opinion-date">${op.date}</p>
            </div>
        `;
    });
}

function updateViewCount() {
    const playerId = getPlayerId();
    const storageKey = `${playerId}PageViews`;
    
    let views = parseInt(localStorage.getItem(storageKey) || '0');
    // Only increment view if loading the page, not just returning from DOM load
    let viewCounterElement = document.getElementById('viewCount');
    if (viewCounterElement) {
        viewCounterElement.textContent = views;
    }
}

// Ensure views are updated on page load
window.addEventListener('load', function() {
    const playerId = getPlayerId();
    if(playerId !== 'default') {
        const storageKey = `${playerId}PageViews`;
        let views = parseInt(localStorage.getItem(storageKey) || '0');
        views++;
        localStorage.setItem(storageKey, views);
        
        let viewCounterElement = document.getElementById('viewCount');
        if(viewCounterElement) {
            viewCounterElement.textContent = views;
        }
    }
    displayOpinions();

    // Image upload functionality
    const imageUpload = document.getElementById('imageUpload');
    const displayImage = document.getElementById('displayImage');
    const placeholderImg = document.getElementById('placeholderImg');

    if (imageUpload && displayImage && placeholderImg) {
        const imageStorageKey = `${playerId}Image`;
        const savedImage = localStorage.getItem(imageStorageKey);
        
        if (savedImage) {
            displayImage.src = savedImage;
            displayImage.style.display = 'block';
            placeholderImg.style.display = 'none';
        }

        imageUpload.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageData = e.target.result;
                    displayImage.src = imageData;
                    displayImage.style.display = 'block';
                    placeholderImg.style.display = 'none';
                    localStorage.setItem(imageStorageKey, imageData);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const opinionInput = document.getElementById('opinionInput');
    if (opinionInput) {
        opinionInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                addOpinion();
            }
        });
    }
});
