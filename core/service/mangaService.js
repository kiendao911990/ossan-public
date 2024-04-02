const httpClient = require('./http')

async function getMangaChapter(id) {
    var result = await httpClient.get(`/api/MangaChapterService/ChapterViewDiscord?id=${id}`);
    if(result.status == 200 || result.status == 201)
        return result.data
    else
        return null;
}

async function getFindMangaByName(name,region) {
    var result = await httpClient.get(`/api/MangaChapterService/ChapterViewDiscord?id=${id}`);
    if(result.status == 200 || result.status == 201)
        return result.data
    else
        return null;
}

module.exports = {
    getMangaChapter,
};