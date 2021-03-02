/**
 * This utility is use to avoid "flash of loading indicator"
 * @param promise
 * @param ms timeout in milliseconds
 */
async function waitAtLeast<T>(promise: Promise<T>, ms = 300): Promise<T> {
  const result = await Promise.allSettled([
    promise,
    new Promise((resolve) => setTimeout(resolve, ms)),
  ])

  if (result[0].status === 'rejected') {
    return Promise.reject(result[0].reason)
  }

  return Promise.resolve(result[0].value)
}

export default waitAtLeast
