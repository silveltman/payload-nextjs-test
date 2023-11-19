export default ({ data }) => {
  return {
    ...data,
    title: `${data.title} Copy`,
    slug: data.slug ? `${data.slug}-copy` : '',
  }
}
