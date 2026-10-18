export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  res.status(200).json({
    status: "banned",
    ban_status: "temporary",
    ban_reason: "Using a modifier",
    ban_end_time: "90d 00:00:00",
    unban_in: "90d 00:00:00",
    message: "System has detected abnormal activities in your account. Account has been temporarily suspended.",
    uid: req.query.unben || "Unknown",
    error_code: 0,
    server_time: Date.now(),
    region: "IND",
    is_guest: false,
    token: "dummy_token_12345" 
  });
}
