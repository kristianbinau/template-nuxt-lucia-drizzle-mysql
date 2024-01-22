export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) { 
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }

  let query = [123];

  return query;
});
