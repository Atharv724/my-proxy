import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("No URL provided");
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      maxRedirects: 5,
    });

    res.setHeader("Content-Type", "text/html");
    res.send(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Failed to fetch URL");
  }
}