const Permission = sails.models.permission;

module.exports = {

  inputs: {

    userId: {
      required: true,
      type: 'number',
    },

  },


  exits: {

    success: {
      statusCode: 200,
    },
  },


  fn: async function ({userId}) {

    await Permission.destroy({userId: userId});

    let removeUser = await User.destroyOne({id: userId});

    if (!removeUser) {
      return this.res.notFound;
    }

    return true;

  }

};
