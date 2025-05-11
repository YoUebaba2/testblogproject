document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input") as HTMLInputElement | null;
  const searchButton = document.getElementById("search-button") as HTMLButtonElement | null;
  const resultsContainer = document.getElementById("results") as HTMLDivElement | null;
  const articles = document.querySelectorAll(".article");

  function searchArticles() {
    // searchInputがnullでないことを確認
    if (searchInput === null || resultsContainer === null) {
      console.error("必要な要素が見つかりません。");
      return;
    }

    const keyword = searchInput.value.trim();
    let found = false;

    // 検索前に全ての記事を一旦非表示
    articles.forEach((article) => {
      const articleElement = article as HTMLElement;  // HTMLElement 型にキャスト
      articleElement.style.display = "none";
    });

    // 検索キーワードが空の場合はすべて表示
    if (keyword === "") {
      articles.forEach((article) => {
        const articleElement = article as HTMLElement;  // HTMLElement 型にキャスト
        articleElement.style.display = "block";
      });
      resultsContainer.textContent = "";
      return;
    }

    // 結果コンテナを初期化
    resultsContainer.textContent = "";

    // キーワードでマッチした記事を表示
    articles.forEach((article) => {
      const articleElement = article as HTMLElement;  // HTMLElement 型にキャスト
      const title = article.querySelector("h2")?.textContent || "";
      const content = article.querySelector("p")?.textContent || "";

      if (title.includes(keyword) || content.includes(keyword)) {
        articleElement.style.display = "block";
        found = true;
      }
    });

    // 結果が見つからないときのメッセージ
    if (!found) {
      const message = document.createElement("p");
      message.textContent = "該当する記事は見つかりませんでした。";
      resultsContainer.appendChild(message);
    }
  }

  // 検索ボタンクリックで実行
  if (searchButton !== null) {
    searchButton.addEventListener("click", searchArticles);
  }

  // Enterキーでも検索できるように
  if (searchInput !== null) {
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        searchArticles();
      }
    });
  }
});
