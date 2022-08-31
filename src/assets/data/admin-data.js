const msgOverview = [
  {
    id: 0,
    message: "I need you to publish my article",
    status: "unread",
    from: "joe",
    subject: "First Message",
    date: "August 29",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 1,
    message: "Hey there",
    status: "read",
    from: "jackie",
    subject: "Follow up",
    date: "July 27",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: 2,
    message: "Hey there",
    status: "read",
    from: "Micheal",
    subject: "Permissions",
    date: "July 17",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "3",
    message: "I don't know",
    status: "sent",
    from: "you",
    subject: "Hey",
    date: "July 18",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg",
  },
  {
    id: "4",
    message: "I don't know",
    status: "draft",
    from: "you",
    subject: "...",
    date: "July 18",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg",
  },
];

const usersBase = [
  { id: 0, type: "Admin", username: "admin", password: "123" },
  { id: 1, type: "Editor", username: "editor", password: "123" },
  { id: 2, type: "Author", username: "author", password: "123" },
  { id: 3, type: "User", username: "user", password: "123" },
];

const contentBase = [
  { id: 0, type: "post", user: 0 },
  { id: 1, type: "article", user: 1 },
  { id: 2, type: "case", user: 2 },
  { id: 3, type: "comment", user: 3 },
];

const requestLog = [
  {
    id: 0,
    date: "August 9",
    type: "post",
    user: 1,
    status: "edit",
  },
  { id: 1, date: "July 29", type: "article", user: 2, status: "pending" },
  { id: 2, date: "July 29", type: "case", user: 2, status: "approved" },
  { id: 3, date: "July 19", type: "comment", user: 3, status: "approved" },
  { id: 4, date: "June 9", type: "permission", user: 2, status: "approved" },
];

const profiles = [
  {
    id: 0,
    name: "John Smith",
    type: "admin",
    dashboard: [1, 1, 1, 1],
    messages: msgOverview,
    requests: requestLog,
    comments: [],
    cases: [],
    posts: [],
  },
  {
    id: 1,
    name: "Dave Jones",
    type: "editor",
    dashboard: [1, 1, 1, 1],
    messages: [],
    requests: [],
    comments: [],
    cases: [],
  },

  {
    id: 2,
    name: "Kent Walker",
    type: "author",
    dashboard: [1, 1, 1, 1],
    messages: [],
    requests: [],
    comments: [],
    cases: [],
  },
  {
    id: 3,
    name: "Guest 567",
    type: "user",
    dashboard: [1, 1, 1, 1],
    messages: [],
    requests: [],
    comments: [],
    cases: [],
  },
];

const content = [
  {
    id: 0,
    type: "post",
    header: "Post A",
    users: [0],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 1,
    type: "case",
    header: "case 1",
    users: [1],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    type: "article",
    header: "Article 1",
    users: [2],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 3,
    type: "comment",
    header: "What is this?",
    users: [3],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

const messages = [
  {
    id: 0,
    message: "I need you to publish my article",
    status: "unread",
    to: "you",
    from: "joeblow",
    subject: "First Message",
    date: "August 29",
  },
  {
    id: 1,
    message: "Hey there",
    status: "read",
    to: "you",
    from: "jackie",
    subject: "Follow up",
    date: "July 27",
  },
  {
    id: 2,
    message: "Hey there",
    status: "read",
    to: "you",
    from: "M",
    subject: "Permissions",
    date: "July 17",
  },
  {
    id: "3",
    message: "I don't know",
    status: "sent",
    to: "Mark",
    from: "you",
    subject: "Hey",
    date: "July 18",
  },
];

module.exports = {
  usersBase,
  requestLog,
  contentBase,
  profiles,
  content,
  messages,
};
