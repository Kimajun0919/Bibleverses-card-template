/**
 * 결과 페이지: URL 파라미터에서 구절을 렌더링
 */

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    let content = params.get('content');
    let reference = params.get('reference');

    // URL 파라미터가 없으면 세션 저장분으로 복구
    if (!content || !reference) {
        content = sessionStorage.getItem('lastVerseContent');
        reference = sessionStorage.getItem('lastVerseReference');
    }

    if (content && reference) {
        document.getElementById('verseContent').innerHTML = content;
        document.getElementById('verseReference').textContent = reference;
        // 한 번 렌더 후 세션 데이터는 정리
        sessionStorage.removeItem('lastVerseContent');
        sessionStorage.removeItem('lastVerseReference');
    } else {
        // 파라미터가 없으면 로딩 페이지로 복귀
        window.location.href = 'loading.html';
    }
});
