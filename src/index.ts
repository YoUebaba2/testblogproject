import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// 静的ファイル（HTML、CSS、JSなど）を提供する
app.use(express.static(path.join(__dirname, '../public')));

// ルートアクセスでindex.htmlを提供
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
