// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export async function data() {
//   const res = await fetch(`${API_BASE_URL}${POST_URL}`);
//   return await res.json();
// }

export default function handler(req, res) {
  res.status(200).json({ name: "pravin" });
}
