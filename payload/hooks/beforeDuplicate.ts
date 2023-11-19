export default ({ data }: any) => {
  return {
    ...data,
    title: `${data.title} Copy`,
    slug: data.slug ? `${data.slug}-copy` : '',
  }
}
