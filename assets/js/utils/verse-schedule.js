/**
 * 날짜 기반 말씀 스케줄러
 * - start/end(YYYY-MM-DD) 범위에 해당하는 구절을 반환
 * - 매칭이 없으면 null
 * - 필요한 구간을 scheduledVerses에 추가하세요.
 */

const scheduledVerses = [
    { start: '2026-01-01', end: '2026-01-31', content: '여호와는 나의 목자시니<br>내게 부족함이 없으리로다.', reference: '시편 23:1' },
    { start: '2026-02-01', end: '2026-02-28', content: '항상 기뻐하라.<br>쉬지 말고 기도하라.<br>범사에 감사하라.', reference: '데살로니가전서 5:16-18' },
    { start: '2026-03-01', end: '2026-03-31', content: '아무 것도 염려하지 말고<br>다만 모든 일에 기도와 간구로<br>너희 구할 것을 감사함으로 하나님께 아뢰라.', reference: '빌립보서 4:6' },
    { start: '2026-04-01', end: '2026-04-30', content: '주는 나의 피난처요 방패시라<br>주의 말씀을 바라나이다.', reference: '시편 119:114' },
    { start: '2026-05-01', end: '2026-05-31', content: '너희는 마음에 근심하지 말라<br>하나님을 믿으니 또 나를 믿으라.', reference: '요한복음 14:1' },
    { start: '2026-06-01', end: '2026-06-30', content: '무슨 일을 하든지 마음을 다하여<br>주께 하듯 하고 사람에게 하듯 하지 말라.', reference: '골로새서 3:23' },
    { start: '2026-07-01', end: '2026-07-31', content: '주는 나의 힘과 방패이시니<br>내 마음이 주를 의지하여 도움을 얻었도다.', reference: '시편 28:7' },
    { start: '2026-08-01', end: '2026-08-31', content: '수고하고 무거운 짐 진 자들아 다 내게로 오라<br>내가 너희를 쉬게 하리라.', reference: '마태복음 11:28' },
    { start: '2026-09-01', end: '2026-09-30', content: '여호와를 경외하는 것이 지혜의 근본이요<br>거룩하신 자를 아는 것이 명철이니라.', reference: '잠언 9:10' },
    { start: '2026-10-01', end: '2026-10-31', content: '네 마음을 다하여 여호와를 신뢰하고<br>네 명철을 의지하지 말라.', reference: '잠언 3:5' },
    { start: '2026-11-01', end: '2026-11-30', content: '여호와는 나의 빛이요 나의 구원이시니<br>내가 누구를 두려워하리요.', reference: '시편 27:1' },
    { start: '2026-12-01', end: '2026-12-31', content: '오늘날 다윗의 동네에 너희를 위하여 구주가 나셨으니<br>곧 그리스도 주시니라.', reference: '누가복음 2:11' },
];

function toYMD(date) {
    return date.toISOString().slice(0, 10);
}

function getVerseForToday(today = new Date()) {
    const todayYmd = toYMD(today);
    const found = scheduledVerses.find(
        ({ start, end }) => start <= todayYmd && todayYmd <= end
    );
    return found || null;
}

if (typeof window !== 'undefined') {
    window.getVerseForToday = getVerseForToday;
}
