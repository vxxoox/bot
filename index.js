const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    await axios.get('https://aternos.org/server/HEVO/start/', {
      headers: {
        Referer: 'https://aternos.org/server/HEVO/'
      }
    });
    res.send('🚀 السيرفر تم تشغيله!');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('❌ فشل في تشغيل السيرفر');
  }
});

app.listen(port, () => {
  console.log(`Bot listening on port ${port}`);
});