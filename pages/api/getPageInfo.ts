import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../sanity";
import { PageInfo } from "@/typings";

// expand technologies array to get full values since it references to skill
const query = groq`*[_type == "pageInfo"][0]`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
