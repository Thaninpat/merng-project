const Country = require('../../models/Country');

module.exports = {
  Query: {
    async countries() {
      try {
        const countries = await Country.find().sort({ p: 'asc' });
        return countries;
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
  },

  // async feed(parent, args, context, info) {
  //   const where = args.filter
  //     ? {
  //         OR: [
  //           { description: { contains: args.filter } },
  //           { url: { contains: args.filter } },
  //         ],
  //       }
  //     : {};

  //   const links = await context.link.findMany({
  //     where,
  //   });

  //   return {
  //     links,
  //   };
  // },
};
