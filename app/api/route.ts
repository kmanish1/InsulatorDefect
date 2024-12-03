export async function POST(req: Request) {
  const url = new URL(req.url);

  const image_url = url.searchParams.get("image_url");

  const response = await fetch(
    `http://159.65.155.220/predict?image_url=${image_url}`,
    {
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to process the image.");
  }

  const data = await response.json();
  return Response.json(data);
}
