if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET:'codeworkrauthentication',
    oauth: {
      google: {
        clientID: '704412770289-kdl5kp249icue5ppf09fgjsv0cqq612a.apps.googleusercontent.com',
        clientSecret: 'cVOBfGoWhoaYuoNP4pUrSYFd',
      },
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET:'codeworkrauthentication',
    oauth: {
      google: {
        clientID: '704412770289-kdl5kp249icue5ppf09fgjsv0cqq612a.apps.googleusercontent.com',
        clientSecret: 'cVOBfGoWhoaYuoNP4pUrSYFd',
      },
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
  };
}