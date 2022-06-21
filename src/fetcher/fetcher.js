export const rawGetResponse = (path) => fetch(`http://7quizzes.local/api${path}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
  },
});

export const rawPostWithBody = (path, body) => fetch(`http://7quizzes.local/api${path}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
  },
  body: JSON.stringify(body)
});

export const rawPostResponse = (path) => fetch(`http://7quizzes.local/api${path}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
  },
});

export const rawPostSignin = (path, body) => fetch(`http://7quizzes.local/api${path}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(body)
});
