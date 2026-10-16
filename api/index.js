export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    ban_status: "temporary",
    reason: "Using a modifier",
    unban_in: "90d00:00:00",
    brand: "By Raja Sahab",
    telegram: "https://t.me/RAJASAHABJII"
  });
}
