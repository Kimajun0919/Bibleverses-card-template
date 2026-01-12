/**
 * 말씀 카드용 플로우 포매터
 * - <br> 기준으로 의미 단위를 분리해 span.flow-chunk로 감싼다.
 * - 레이아웃 줄바꿈은 CSS flex-wrap + gap으로 처리한다.
 */
function formatVerseForCard(text) {
    if (!text) return '';

    const chunks = text.split(/<br\s*\/?>/gi);

    const html = chunks
        .map((chunk) => {
            const clean = chunk.trim();
            if (!clean) return '';
            return `<span class="flow-chunk">${clean}</span>`;
        })
        .join('');

    return html;
}

if (typeof window !== 'undefined') {
    window.formatVerseForCard = formatVerseForCard;
}
