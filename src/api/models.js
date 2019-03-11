export const METHOD = {
  GET: 'get',
  POST: 'post',
};

export default {
  chat: {
    add: {
      method: METHOD.POST,
      url: 'api/chat/add/contact',
    },
  },
};
