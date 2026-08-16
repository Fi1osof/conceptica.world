import { Prisma } from '@prisma/client'
import slugify from '@sindresorhus/slugify'
import { builder } from '../../../builder'
import { KBConceptCreateInput } from '../inputs'
import { createCUID } from '../../helpers/createCUID'

builder.mutationField('createConcept', (t) =>
  t.prismaField({
    type: 'KBConcept',
    args: {
      data: t.arg({ type: KBConceptCreateInput, required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      if (!ctx.currentUser) {
        throw new Error('Unauthorized')
      }

      const {
        data: {
          name,
          quality,
          data: dataArg,
          visibility,
          uri: uriArg,
          ...other
        },
      } = args

      if (!name) {
        throw new Error('name required')
      }

      let uri = uriArg

      if (!uri) {
        const urlSection = '/concepts'

        const slug = slugify(name)

        uri = [urlSection, slug].join('/')
      }

      const id = createCUID()

      const data: Prisma.KBConceptCreateInput = {
        ...other,
        id,
        name,
        quality: quality ?? undefined,
        visibility: visibility ?? undefined,
        data: dataArg as Prisma.KBConceptCreateInput['data'],
        uri: uri || `/concepts/${id}`,
        CreatedBy: {
          connect: {
            id: ctx.currentUser.id,
          },
        },
      }

      return ctx.prisma.kBConcept.create({
        ...query,
        data,
      })
    },
  }),
)
