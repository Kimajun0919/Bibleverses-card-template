/**
 * 로딩 페이지 로직
 * - 구절 선택
 * - 결과 페이지로 전환
 * - 뒤로가기 방지 처리
 */

document.addEventListener('DOMContentLoaded', function() {
    // 뒤로가기 차단을 위한 히스토리 쌓기
    history.replaceState(null, null, location.href);
    history.pushState(null, null, location.href);

    window.addEventListener('popstate', function() {
        history.pushState(null, null, location.href);
        history.pushState(null, null, location.href);
        history.pushState(null, null, location.href);
    });

    // 로딩 중 이탈 방지
    const handleBeforeUnload = function(event) {
        event.preventDefault();
        event.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // 주기적으로 히스토리 쌓기 (뒤로가기 방지)
    const historyBlockInterval = setInterval(function() {
        history.pushState(null, null, location.href);
    }, 100);

    const MAX_TRIES = Math.min(verses.length, 50);
    function getValidVerse() {
        for (let i = 0; i < MAX_TRIES; i++) {
            const candidate = verses[getNextVerseIndex()];
            if (candidate && candidate.content && candidate.reference) {
                return candidate;
            }
        }
        return verses[0];
    }

    // 로딩 시간 후 결과 페이지로 이동
    setTimeout(() => {
        clearInterval(historyBlockInterval);
        window.removeEventListener('beforeunload', handleBeforeUnload);

        const randomVerse = getValidVerse();

        const formattedContent = formatVerseForCard(randomVerse.content, 25);

        const params = new URLSearchParams();
        params.set('content', formattedContent.replace(/\n/g, '<br>'));
        params.set('reference', randomVerse.reference);

        window.location.href = `result.html?${params.toString()}`;
    }, 1500);
});
