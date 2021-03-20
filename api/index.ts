import { ServerRequest } from 'https://deno.land/std@0.89.0/http/server.ts'

export default async (req: ServerRequest) => {
  await req.respond({ body: `Hello, from Deno v${Deno.version.deno}!` })
}
