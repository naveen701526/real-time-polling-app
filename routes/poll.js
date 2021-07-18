const express = require('express');

const router = express.Router();

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1236934',
  key: '8dfe384ac89694a6c5d3',
  secret: '0f812750517bc0b50656',
  cluster: 'ap2',
  useTLS: true,
});

router.get('/', (req, res) => {
  res.send('POLL');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: JSON.parse(req.body.os),
  });

  return res.json({ success: true, message: 'Thank You for Voting.' });
});

module.exports = router;
