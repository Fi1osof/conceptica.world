import { PrismaContext } from 'server/context/interfaces'

export async function getConceptsUrls(ctx: PrismaContext) {
  const concepts = (
    await ctx.prisma.kBConcept.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        uri: true,
      },
    })
  ).filter((n): n is typeof n & { uri: string } => !!n.uri)

  if (!concepts.length) {
    throw new Error('Can not get concepts')
  }

  return concepts
}
