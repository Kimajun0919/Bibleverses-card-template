/**
 * 말씀 구절 선택을 위한 최소 로직
 * - 메모리 내에서만 셔플/순회
 * - verses 배열 길이가 바뀌면 자동 리셋
 */

let verseOrder = [];
let versePtr = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function ensureOrder() {
    if (!Array.isArray(verseOrder) || verseOrder.length !== verses.length || versePtr >= verseOrder.length) {
        verseOrder = shuffle(Array.from({ length: verses.length }, (_, i) => i));
        versePtr = 0;
    }
}

function getNextVerseIndex() {
    ensureOrder();
    const index = verseOrder[versePtr];
    versePtr += 1;
    return index;
}

if (typeof window !== 'undefined') {
    window.getNextVerseIndex = getNextVerseIndex;
}
