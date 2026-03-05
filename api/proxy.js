import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("No URL provided");
  }

  try {
    const response = await axios.get(url);
    res.setHeader("Content-Type", "text/html");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Failed to fetch URL");
  }
}