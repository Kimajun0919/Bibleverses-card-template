/**
 * 말씀 카드용 단순 포매터
 * - HTML <br> 태그를 줄바꿈으로 변환
 * - 공백 정리 후 지정 길이 기준으로 줄바꿈
 */

function formatVerseForCard(text, maxLength = 25) {
    if (!text) return '';

    // 태그/공백 정리
    const clean = text
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const words = clean.split(' ');
    const lines = [];
    let current = '';

    for (const word of words) {
        const candidate = current ? `${current} ${word}` : word;
        if (candidate.length > maxLength && current) {
            lines.push(current);
            current = word;
        } else {
            current = candidate;
        }
    }

    if (current) {
        lines.push(current);
    }

    return lines.join('\n');
}

if (typeof window !== 'undefined') {
    window.formatVerseForCard = formatVerseForCard;
}
