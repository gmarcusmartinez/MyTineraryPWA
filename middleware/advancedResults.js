const advnacedResults = (model, populate) => async (req, res, next) => {
  let query;

  const reqQuery = { ...req.query };
  const removeFields = ["select", "sort", "page", "limit"];
  removeFields.forEach((param) => delete reqQuery[param]);

  const queryString = formatQueryString(JSON.stringify(reqQuery));
  query = model.find(JSON.parse(queryString));

  query = req.query.select ? createSelect(req, query) : query;
  query = req.query.sort ? createSort(req, query) : query.sort("-createdAt");

  const pagination = await createPagination(query, model, req);

  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };
  next();
};

const formatQueryString = (queryString) => {
  queryString = queryString.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  return queryString;
};

const createSort = (request, query) => {
  const sortBy = request.query.sort.split(",").join(" ");
  query = query.sort(sortBy);
  return query;
};

const createSelect = (request, query) => {
  const fields = request.query.select.split(",").join(" ");
  query = query.select(fields);
  return query;
};

const createPagination = async (query, model, request) => {
  const page = parseInt(request.query.page, 10) || 1;
  const limit = parseInt(request.query.limit, 2) || 20;
  const start = (page - 1) * limit;
  const end = page * limit;
  const total = await model.countDocuments();

  query = query.skip(start).limit(limit);

  const pagination = {};
  if (end < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (start > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }
  console.log(pagination);
  return pagination;
};
module.exports = advnacedResults;
