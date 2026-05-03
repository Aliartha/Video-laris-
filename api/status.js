export default function handler(req, res) {
  res.status(200).json({
    status: "completed",
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4"
  });
}
