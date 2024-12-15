import knex from "../config/knex";

export const getStats = async (
    user_id: number,
) => {
    const results = await knex("urls")
        .where({user_id})
        .leftJoin("visits", "urls.id", "visits.url_id")
        .select(
            "user_id",
            knex.raw("count(visits.id) as visits_count"),
            knex.raw("count(urls.id) as url_count"),
            knex.raw("count(distinct visits.ip) as visitor_count"),
        )
        .groupBy("user_id");

    return results;
};
