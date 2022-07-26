export const rawGetResponse = (path) => fetch(`/api${path}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Token')}`
  },
});

export const rawPostWithBody = (path, body) => fetch(`/api${path}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${localStorage.getItem('Token')}`
  },
  body: JSON.stringify(body)
});

export const rawPostResponse = (path) => fetch(`/api${path}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${localStorage.getItem('Token')}`
  },
});

export const rawPostSignin = (path, body) => fetch(`/api${path}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(body)
});
