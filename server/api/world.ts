import type { IncomingMessage, ServerResponse } from "http";

// make a request with query params to /api/world?key=value
export default async (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url!, `http://${req.headers.host}/api/world`);
  interface obj {
    [key: string]: string;
  }
  const obj: obj = {};

  console.log("APIのリクエスト：", url);

  for (const [key, value] of url.searchParams) {
    obj[key] = value;
  }

  if (!Object.entries(obj).length) {
    res.statusCode = 404;
    console.log("APIのレスポンス：", res.statusCode);
    return res.end("何も見つかりません");
  }

  console.log("APIのレスポンス：", res.statusCode);
  res.end(JSON.stringify(obj));
};
