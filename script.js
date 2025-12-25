let revealedCount = 0;

function nextStage(stageNum) {
    document.querySelectorAll('.stage').forEach(s => s.classList.add('hidden'));
    document.getElementById(`stage${stageNum}`).classList.remove('hidden');
}

function reveal(card) {
    if (!card.classList.contains('revealed')) {
        card.classList.add('revealed');
        revealedCount++;
        if (revealedCount === 4) {
            document.getElementById('nextBtn').classList.remove('hidden');
        }
    }
}
