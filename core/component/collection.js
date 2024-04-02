
const generateEmbed = (content, image, description, footer) => {
    let res = {};
    if(content)
        res.content = content;
    if(image || description ||footer){
        let embed = {
            image,
            description,
            footer
        };
        res.embed = embed;
    }
    return [res];
}
const generateMessage = (content, image) => {
    let res = {};
    if(content)
        res.content = content;
    if(image){
        let embed = {
            image
        };
        res.embed = embed;
    }
    return [res];
}

module.exports = {
    generateEmbed,
    generateMessage
}