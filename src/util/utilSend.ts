import { Context, Status, z } from '@server/mod.ts'

export function json(
	ctx: Context,
	obj: Record<string, unknown> | z.AnyZodObject,
) {
	ctx.response.status = Status.OK
	ctx.response.headers.set('Content-Type', 'application/json')
	ctx.response.body = JSON.stringify(obj, null, '\t')

	return null
}

export function success(ctx: Context) {
	ctx.response.status = Status.OK
	ctx.response.headers.set('Content-Type', 'application/json')
	ctx.response.body = JSON.stringify({ success: true }, null, '\t')

	return null
}
