export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // FF MAX ka exact temporary ban response
  res.status(200).json({
    status: "banned",
    ban_status: "temporary",
    ban_reason: "Using a modifier",
    ban_end_time: "90d 00:00:00",
    unban_in: "90d 00:00:00",
    message: "System has detected abnormal activities in your account. Account has been temporarily suspended.",
    uid: req.query.unben || "Unknown"
  });
}
