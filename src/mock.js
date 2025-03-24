export async function fetchUserNames() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  const users = await response.json()
  return users.map(user => user.name)
}
