export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Aaj ki date yahan daal
  const releaseDate = new Date("2026-10-17T12:00:00Z"); 
  
  const expiryDays = 5;
  const now = new Date();
  const diffInMs = now - releaseDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays > expiryDays) {
    res.status(500).json({ error: "License Expired" });
    return;
  }

  // 90 Din ka timer calculation (Exact 90 se shuru hoga)
  const totalTimerMs = 90 * 24 * 60 * 60 * 1000;
  const remainingMs = totalTimerMs - diffInMs;

  const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

  // String format (e.g., 90d 00:00:00)
  const timeString = days + "d " + String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

  res.status(200).json({
    ban_type: 1,
    ban_status: "temporary",
    ban_reason: "Using a modifier",
    ban_end_time: timeString,
    unban_in: timeString,
    status: "banned",
    message: "System has detected abnormal activities. Account has been temporarily suspended.",
    brand: "By Raja Sahab",
    telegram: "https://t.me/RAJASAHABJII"
  });
}
