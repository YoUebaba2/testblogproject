// ボタンのクリックイベントを処理
const showButton = document.getElementById('showButton');
const content = document.getElementById('content');

showButton.addEventListener('click', function() {
    if (content.style.display === 'none' || content.style.display === '') {
        // テキストを表示（フェードイン）
        content.style.display = 'block'; // 最初は隠れているので表示させる
        setTimeout(function() {
            content.style.opacity = 1; // opacityを1にしてフェードイン効果
        }, 10);

        // ボタンのテキストを変更
        showButton.textContent = 'テキストを非表示';
    } else {
        // テキストを非表示（フェードアウト）
        content.style.opacity = 0; // opacityを0にしてフェードアウト
        setTimeout(function() {
            content.style.display = 'none'; // 完全に非表示に
        }, 1000); // 1秒後に非表示にする

        // ボタンのテキストを変更
        showButton.textContent = 'テキストを表示';
    }
});
