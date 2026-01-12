/**
 * 로딩 페이지: 구절 선택 후 결과 페이지로 이동
 */

document.addEventListener('DOMContentLoaded', function() {
    const MAX_TRIES = Math.min(verses.length, 50);

    function getValidVerse() {
        const scheduled = typeof getVerseForToday === 'function' ? getVerseForToday() : null;
        if (scheduled && scheduled.content && scheduled.reference) {
            return scheduled;
        }

        for (let i = 0; i < MAX_TRIES; i++) {
            const candidate = verses[getNextVerseIndex()];
            if (candidate && candidate.content && candidate.reference) {
                return candidate;
            }
        }
        return verses[0];
    }

    setTimeout(() => {
        const randomVerse = getValidVerse();
        const formattedContent = formatVerseForCard(randomVerse.content, 25);

        // 세션에 최근 구절 저장 (파라미터 유실시 대비)
        sessionStorage.setItem('lastVerseContent', formattedContent.replace(/\n/g, '<br>'));
        sessionStorage.setItem('lastVerseReference', randomVerse.reference);

        const params = new URLSearchParams();
        params.set('content', formattedContent.replace(/\n/g, '<br>'));
        params.set('reference', randomVerse.reference);

        window.location.href = `result.html?${params.toString()}`;
    }, 1500);
});
